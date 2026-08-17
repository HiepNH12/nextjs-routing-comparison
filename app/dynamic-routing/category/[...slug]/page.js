/**
 * File: app/dynamic-routing/category/[...slug]/page.js
 * [...slug] la CATCH-ALL ROUTE: khop voi 1 hoac nhieu segment lien tiep.
 * VD: /category/a           -> slug = ['a']
 *     /category/a/b/c       -> slug = ['a', 'b', 'c']
 * (Neu muon khop CA truong hop khong co segment nao, dung [[...slug]] - optional catch-all)
 */
export default async function CategoryPage({ params }) {
  const { slug } = await params;

  return (
    <div>
      <span className="badge">app/dynamic-routing/category/[...slug]/page.js</span>
      <h2>Catch-all Route</h2>
      <p>
        Mảng segments nhận được: <code>[{slug.map((s) => `"${s}"`).join(', ')}]</code>
      </p>
      <p>Ghép lại thành đường dẫn: {slug.join(' / ')}</p>
    </div>
  );
}
