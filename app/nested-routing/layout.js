import Link from 'next/link';

// Layout nay boc quanh MOI trang duoi /nested-routing/*
export default function NestedRoutingLayout({ children }) {
  return (
    <div>
      <span className="badge">app/nested-routing/layout.js</span>
      <h1>Nested Routing (Định tuyến lồng nhau)</h1>
      <div className="nested-shell">
        <nav className="sub-nav">
          <Link href="/nested-routing">Tổng quan</Link>
          <Link href="/nested-routing/settings">Cài đặt</Link>
        </nav>
        <div className="nested-content">{children}</div>
      </div>
    </div>
  );
}
