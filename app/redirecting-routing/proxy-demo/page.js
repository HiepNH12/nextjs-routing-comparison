import Link from 'next/link';

// Trang nay CHI bi redirect khi proxy.js (o thu muc goc) thay query ?redirect=true.
// Neu ban dang doc duoc noi dung nay, nghia la proxy.js da cho request di qua (NextResponse.next()).
export default function ProxyDemoPage() {
  return (
    <div>
      <h2>🟢 Bạn KHÔNG bị redirect</h2>
      <p>
        Trang này thuộc <code>app/redirecting-routing/proxy-demo/page.js</code>.
        proxy.js chỉ chặn và chuyển hướng khi URL có{' '}
        <code>?redirect=true</code>.
      </p>
      <p>
        <Link href="/redirecting-routing/proxy-demo?redirect=true">
          Thêm ?redirect=true để bị proxy.js chuyển hướng ngay lập tức →
        </Link>
      </p>
    </div>
  );
}
