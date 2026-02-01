import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppShell } from './layout';
import { HomePage, TokensPage, ButtonPage, TextPage, SpinnerPage, IconPage, DividerPage, TextFieldPage, TabsPage, PopoverPage, MenuPage, AccordionPage, CalendarPage, WindowFramePage, DialogPage, ToolbarPage, RadioButtonPage, CheckboxPage, AlertPage, BadgePage, DropdownPage, LoadingBarPage, SidebarPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/foundations/tokens" element={<TokensPage />} />
          {/* Atoms */}
          <Route path="/atoms/button" element={<ButtonPage />} />
          <Route path="/atoms/text" element={<TextPage />} />
          <Route path="/atoms/spinner" element={<SpinnerPage />} />
          <Route path="/atoms/icon" element={<IconPage />} />
          <Route path="/atoms/divider" element={<DividerPage />} />
          <Route path="/atoms/radio" element={<RadioButtonPage />} />
          <Route path="/atoms/checkbox" element={<CheckboxPage />} />
          <Route path="/atoms/alert" element={<AlertPage />} />
          <Route path="/atoms/badge" element={<BadgePage />} />
          <Route path="/atoms/dropdown" element={<DropdownPage />} />
          <Route path="/atoms/loading-bar" element={<LoadingBarPage />} />
          {/* Molecules */}
          <Route path="/molecules/textfield" element={<TextFieldPage />} />
          <Route path="/molecules/tabs" element={<TabsPage />} />
          <Route path="/molecules/popover" element={<PopoverPage />} />
          <Route path="/molecules/menu" element={<MenuPage />} />
          <Route path="/molecules/accordion" element={<AccordionPage />} />
          <Route path="/molecules/calendar" element={<CalendarPage />} />
          {/* Organisms */}
          <Route path="/organisms/window-frame" element={<WindowFramePage />} />
          <Route path="/organisms/dialog" element={<DialogPage />} />
          <Route path="/organisms/toolbar" element={<ToolbarPage />} />
          <Route path="/organisms/sidebar" element={<SidebarPage />} />
          {/* Placeholder routes - will be implemented as components are built */}
          <Route path="/atoms/*" element={<PlaceholderPage name="Component" />} />
          <Route path="/molecules/*" element={<PlaceholderPage name="Component" />} />
          <Route path="/organisms/*" element={<PlaceholderPage name="Component" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

function PlaceholderPage({ name }: { name: string }) {
  return (
    <div style={{ padding: 'var(--space-8)' }}>
      <h1>{name}</h1>
      <p style={{ color: 'var(--color-text-secondary)' }}>
        Anna is thinking about how to implement this component.
      </p>
    </div>
  );
}

export default App;
