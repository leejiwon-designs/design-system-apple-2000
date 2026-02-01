import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TOKENS_CSS_PATH = path.join(__dirname, '../src/styles/tokens.css');
const OUTPUT_PATH = path.join(__dirname, '../tokens.json');

const cssContent = fs.readFileSync(TOKENS_CSS_PATH, 'utf-8');

// Regex to extract CSS variables: --name: value;
// Capture groups: 1 = name, 2 = value
const varRegex = /--([a-zA-Z0-9-]+):\s*([^;]+);/g;

const tokens = {
    active: "source", // for Token Studio compatibility checks often
    color: {},
    space: {},
    font: {},
    other: {}
};

let match;
while ((match = varRegex.exec(cssContent)) !== null) {
    const name = match[1];
    const value = match[2].trim();

    if (name.startsWith('color-')) {
        // Structure: color.aqua.500
        const parts = name.replace('color-', '').split('-');
        let current = tokens.color;
        for (let i = 0; i < parts.length - 1; i++) {
            const part = parts[i];
            if (!current[part]) current[part] = {};
            current = current[part];
        }
        current[parts[parts.length - 1]] = { value, type: 'color' };
    } else if (name.startsWith('space-')) {
        tokens.space[name.replace('space-', '')] = { value, type: 'spacing' };
    } else if (name.startsWith('font-')) {
        const fontName = name.replace('font-', '');
        // primitive grouping
        if (fontName.startsWith('size-')) {
            tokens.font[fontName.replace('size-', '')] = { value, type: 'fontSizes' };
        } else {
            tokens.font[fontName] = { value, type: 'fontFamilies' };
        }
    } else {
        tokens.other[name] = { value, type: 'other' };
    }
}

fs.writeFileSync(OUTPUT_PATH, JSON.stringify(tokens, null, 2));
console.log(`Tokens exported to ${OUTPUT_PATH}`);
