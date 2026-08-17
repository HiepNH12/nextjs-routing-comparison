/**
 * File: app/dynamic-routing/[productId]/page.js
 * Tu Next.js 15 tro di, "params" la mot Promise (Async Request API) nen
 * PHAI await truoc khi doc gia tri, thay vi doc truc tiep nhu ban Next.js cu.
 */
export default async function ProductPage({ params }) {
  const { productId } = await params;

  return (
    <div>
      <span className="badge">app/dynamic-routing/[productId]/page.js</span>
      <h2>Chi tiết sản phẩm #{productId}</h2>
      <p>
        Giá trị <code>"{productId}"</code> được Next.js tự động trích từ URL
        và truyền vào qua props <code>params</code> (dạng Promise, cần{' '}
        <code>await</code>).
      </p>
    </div>
  );
}
