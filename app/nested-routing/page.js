export default function NestedRoutingPage() {
  return (
    <div>
      <p>
        Mỗi thư mục trong <code>app/</code> tương ứng với 1 segment URL. Mỗi
        cấp có thể có <code>layout.js</code> riêng, và các layout được{' '}
        <strong>lồng vào nhau</strong> theo đúng cấu trúc thư mục:
      </p>
      <pre>
{`RootLayout                              (app/layout.js)
 └─ NestedRoutingLayout                 (app/nested-routing/layout.js)
     └─ SettingsLayout                  (app/nested-routing/settings/layout.js)
         └─ ProfilePage / SecurityPage  (app/nested-routing/settings/profile|security/page.js)`}
      </pre>
      <p>Vào mục "Cài đặt" ở thanh bên để thấy thêm 1 lớp layout lồng bên trong.</p>
    </div>
  );
}
