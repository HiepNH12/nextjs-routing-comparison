import Link from 'next/link';

export default function RedirectingRoutingPage() {
  return (
    <div>
      <span className="badge">app/redirecting-routing/page.js</span>
      <h1>Redirecting Routing (Điều hướng tự động)</h1>
      <p>
        Dự án minh họa <strong>3 cơ chế redirect khác nhau</strong> trong
        Next.js. Bấm từng liên kết để thấy bạn luôn kết thúc ở cùng 1 trang
        đích, nhưng bằng 3 con đường khác nhau.
      </p>

      <div className="route-grid">
        <Link href="/redirecting-routing/server-redirect" className="route-card">
          <h3>1. redirect() trong Server Component</h3>
          <p>Chạy trên server, ngay khi component render. Dùng next/navigation.</p>
        </Link>

        <Link href="/redirecting-routing/old-page" className="route-card">
          <h3>2. Redirect cấu hình trong next.config.mjs</h3>
          <p>Không cần code xử lý — Next.js redirect trước khi tới bất kỳ page nào.</p>
        </Link>

        <Link href="/redirecting-routing/proxy-demo?redirect=true" className="route-card">
          <h3>3. Redirect có điều kiện trong proxy.js</h3>
          <p>Chạy ở Edge Runtime, dựa trên điều kiện động (ở đây là query ?redirect=true).</p>
        </Link>
      </div>

      <p style={{ marginTop: 20 }}>
        Muốn thấy trang <strong>KHÔNG</strong> bị redirect để đối chứng? Vào{' '}
        <Link href="/redirecting-routing/proxy-demo">/redirecting-routing/proxy-demo</Link>{' '}
        (không có query) — proxy.js sẽ để bạn ở nguyên trang này.
      </p>
    </div>
  );
}
