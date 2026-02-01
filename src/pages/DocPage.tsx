import type { ReactNode } from 'react';
import { useState } from 'react';
import './DocPage.css';

type ComponentLevel = 'foundation' | 'atom' | 'molecule' | 'organism';

interface DocPageProps {
    title: string;
    level: ComponentLevel;
    description: string;
    children: ReactNode;
}

export function DocPage({ title, level, description, children }: DocPageProps) {
    return (
        <article className="doc-page">
            <header className="doc-page__header">
                <span className={`doc-page__level doc-page__level--${level}`}>
                    {level}
                </span>
                <h1 className="doc-page__title">{title}</h1>
                <p className="doc-page__description">{description}</p>
            </header>
            {children}
        </article>
    );
}

interface DocSectionProps {
    title: string;
    children: ReactNode;
}

export function DocSection({ title, children }: DocSectionProps) {
    return (
        <section className="doc-page__section">
            <h2 className="doc-page__section-title">{title}</h2>
            {children}
        </section>
    );
}

interface DocPreviewProps {
    children: ReactNode;
}

export function DocPreview({ children }: DocPreviewProps) {
    return <div className="doc-page__preview">{children}</div>;
}

interface DocCodeProps {
    code: string;
    language?: string;
}

export function DocCode({ code, language = 'tsx' }: DocCodeProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="doc-page__code">
            <div className="doc-page__code-header">
                <span className="doc-page__code-label">{language}</span>
                <button
                    type="button"
                    className="doc-page__code-copy"
                    onClick={handleCopy}
                    aria-label={copied ? 'Copied!' : 'Copy code'}
                >
                    {copied ? '✓ Copied' : 'Copy'}
                </button>
            </div>
            <pre>
                <code>{code}</code>
            </pre>
        </div>
    );
}

interface PropRow {
    name: string;
    type: string;
    default?: string;
    description: string;
}

interface DocPropsTableProps {
    props: PropRow[];
}

export function DocPropsTable({ props }: DocPropsTableProps) {
    return (
        <table className="doc-page__props-table">
            <thead>
                <tr>
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {props.map((prop) => (
                    <tr key={prop.name}>
                        <td><code>{prop.name}</code></td>
                        <td><code>{prop.type}</code></td>
                        <td>{prop.default ? <code>{prop.default}</code> : '—'}</td>
                        <td>{prop.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
