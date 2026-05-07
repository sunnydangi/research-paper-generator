import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

// Basic global error handlers to make runtime errors visible in the browser
window.addEventListener('error', (event) => {
  // eslint-disable-next-line no-console
  console.error('Global error caught:', event.error || event.message || event);
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = `<pre style="white-space:pre-wrap;color:#fff;background:#111;padding:20px;font-family:monospace;">${String(event.error || event.message || event)}</pre>`;
  }
});

window.addEventListener('unhandledrejection', (ev) => {
  // eslint-disable-next-line no-console
  console.error('Unhandled promise rejection:', ev.reason);
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = `<pre style="white-space:pre-wrap;color:#fff;background:#111;padding:20px;font-family:monospace;">Unhandled promise rejection:\n${String(ev.reason)}</pre>`;
  }
});

try {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </StrictMode>
  );
} catch (err) {
  // eslint-disable-next-line no-console
  console.error('Render error:', err);
  const root = document.getElementById('root');
  if (root) root.innerHTML = `<pre style="white-space:pre-wrap;color:#fff;background:#111;padding:20px;font-family:monospace;">${String(err)}</pre>`;
}
