import Link from 'next/link';

const products = [
  { id: '1', name: 'Bàn phím cơ' },
  { id: '2', name: 'Chuột không dây' },
  { id: '42', name: 'Màn hình 27 inch' },
];

export default function DynamicRoutingPage() {
  return (
    <div>
      <span className="badge">app/dynamic-routing/page.js</span>
      <h1>Dynamic Routing (Định tuyến động)</h1>
      <p>
        Thư mục đặt tên <code>[productId]</code> tạo ra 1 segment ĐỘNG, khớp
        với bất kỳ giá trị nào tại vị trí đó trong URL.
      </p>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link href={`/dynamic-routing/${p.id}`}>
              {p.name} (id={p.id})
            </Link>
          </li>
        ))}
      </ul>
      <p>
        Ngoài dạng <code>[param]</code> (khớp đúng 1 segment), Next.js còn hỗ
        trợ <strong>Catch-all Route</strong> bằng cú pháp{' '}
        <code>[...slug]</code> (khớp nhiều segment cùng lúc). Ví dụ:{' '}
        <Link href="/dynamic-routing/category/dien-tu/laptop/gaming">
          /dynamic-routing/category/dien-tu/laptop/gaming
        </Link>
      </p>
    </div>
  );
}
