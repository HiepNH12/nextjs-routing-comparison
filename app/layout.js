import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'So sánh Routing trong Next.js',
  description:
    'Ứng dụng minh họa Parallel, Imperative, Redirecting, Shallow, Nested, Dynamic Routing trong Next.js (App Router + Pages Router).',
};

const routes = [
  { href: '/parallel-routing', label: 'Parallel' },
  { href: '/imperative-routing', label: 'Imperative' },
  { href: '/redirecting-routing', label: 'Redirecting' },
  { href: '/shallow-routing-demo', label: 'Shallow' },
  { href: '/nested-routing', label: 'Nested' },
  { href: '/dynamic-routing', label: 'Dynamic' },
];

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <header className="main-header">
          <Link href="/" className="brand">
            🧭 So sánh Routing Next.js
          </Link>
          <nav className="main-nav">
            {routes.map((r) => (
              <Link key={r.href} href={r.href}>
                {r.label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="main-content">{children}</main>
        <footer className="main-footer">
          App Router (app/) + Pages Router (pages/) chạy song song trong cùng 1 dự án để minh họa Shallow Routing.
        </footer>
      </body>
    </html>
  );
}
