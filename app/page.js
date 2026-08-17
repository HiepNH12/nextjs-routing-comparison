import Link from 'next/link';

const routes = [
  {
    href: '/parallel-routing',
    title: '1. Parallel Routing',
    desc: 'Render nhiều "slot" độc lập cùng lúc trong 1 layout, dùng quy ước thư mục @folder.',
  },
  {
    href: '/nested-routing',
    title: '2. Nested Routing',
    desc: 'Layout lồng nhau theo cấp thư mục, mỗi cấp URL giữ UI và trạng thái riêng.',
  },
  {
    href: '/dynamic-routing',
    title: '3. Dynamic Routing',
    desc: 'Segment động [param] và catch-all [...slug] khớp với nhiều URL khác nhau.',
  },
  {
    href: '/imperative-routing',
    title: '4. Imperative Routing',
    desc: 'Điều hướng bằng code qua useRouter() thay vì khai báo thẻ <Link>.',
  },
  {
    href: '/redirecting-routing',
    title: '5. Redirecting Routing',
    desc: '3 cách tự động chuyển hướng: redirect(), next.config.mjs, và proxy.js.',
  },
  {
    href: '/shallow-routing-demo',
    title: '6. Shallow Routing',
    desc: 'Đổi URL nhưng KHÔNG chạy lại hàm lấy dữ liệu (đặc trưng của Pages Router).',
  },
];

export default function HomePage() {
  return (
    <div>
      <h1>So sánh 6 loại Routing trong Next.js</h1>
      <p>
        Bấm vào từng thẻ bên dưới để xem demo chạy thật. Đọc file{' '}
        <code>README.md</code> đi kèm để xem giải thích chi tiết + các bước triển
        khai từng loại.
      </p>

      <div className="route-grid">
        {routes.map((r) => (
          <Link key={r.href} href={r.href} className="route-card">
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </Link>
        ))}
      </div>

      <h2 className="section-title">Bảng phân loại nhanh</h2>
      <p>
        Lưu ý: 6 khái niệm này <strong>không ngang hàng nhau</strong> — chúng thuộc
        3 nhóm bản chất khác nhau. Xem giải thích đầy đủ trong README.md.
      </p>
      <table>
        <thead>
          <tr>
            <th>Loại</th>
            <th>Thuộc nhóm</th>
            <th>Router hỗ trợ chính thức</th>
            <th>Vấn đề nó giải quyết</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Parallel</td>
            <td>Quy ước thư mục</td>
            <td>App Router</td>
            <td>Hiển thị nhiều view độc lập cùng lúc</td>
          </tr>
          <tr>
            <td>Nested</td>
            <td>Quy ước thư mục</td>
            <td>App Router &amp; Pages Router</td>
            <td>Chia sẻ UI theo từng cấp URL</td>
          </tr>
          <tr>
            <td>Dynamic</td>
            <td>Quy ước thư mục</td>
            <td>App Router &amp; Pages Router</td>
            <td>1 route khớp nhiều giá trị (id, slug...)</td>
          </tr>
          <tr>
            <td>Imperative</td>
            <td>Kỹ thuật điều hướng</td>
            <td>App Router &amp; Pages Router</td>
            <td>Điều hướng sau khi xử lý logic trong code</td>
          </tr>
          <tr>
            <td>Redirecting</td>
            <td>Hành vi điều hướng</td>
            <td>App Router &amp; Pages Router</td>
            <td>Tự động đưa người dùng sang URL khác</td>
          </tr>
          <tr>
            <td>Shallow</td>
            <td>Hành vi điều hướng</td>
            <td>Pages Router (chính thức có tuỳ chọn shallow)</td>
            <td>Đổi URL, giữ nguyên dữ liệu đã fetch</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
