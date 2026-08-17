import Link from 'next/link';

// Layout cap 2, chi boc quanh cac trang duoi /nested-routing/settings/*
export default function SettingsLayout({ children }) {
  return (
    <div>
      <span className="badge">app/nested-routing/settings/layout.js (lớp lồng thứ 2)</span>
      <div className="settings-shell">
        <aside className="settings-sidebar">
          <Link href="/nested-routing/settings/profile">Hồ sơ (Profile)</Link>
          <Link href="/nested-routing/settings/security">Bảo mật (Security)</Link>
        </aside>
        <div className="settings-content">{children}</div>
      </div>
    </div>
  );
}
