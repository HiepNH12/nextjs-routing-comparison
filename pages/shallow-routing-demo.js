import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

/**
 * SHALLOW ROUTING - day la trang duy nhat trong du an nam trong thu muc
 * `pages/` thay vi `app/`. Ly do: tuy chon `{ shallow: true }` la mot API
 * CHINH THUC va CHI ton tai o Pages Router. App Router (thu muc app/) hien
 * KHONG co co che "shallow" tuong duong 1-1, vi Server Component co vong doi
 * du lieu khac han (xem giai thich trong README.md).
 *
 * getServerSideProps chay tren server MOI KHI trang duoc request binh thuong.
 * Muc tieu cua demo: chung minh rang khi dung shallow:true, ham nay
 * KHONG chay lai - nen "renderedAt" giu nguyen gia tri cu du URL co doi.
 */
export async function getServerSideProps() {
  return {
    props: {
      renderedAt: new Date().toISOString(),
    },
  };
}

export default function ShallowRoutingDemo({ renderedAt }) {
  const router = useRouter();
  const [fetchCount, setFetchCount] = useState(1);

  // Moi lan getServerSideProps THUC SU chay lai (server tra ve renderedAt moi),
  // React se re-render voi prop moi -> effect nay chay -> tang bo dem.
  useEffect(() => {
    setFetchCount((c) => c + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderedAt]);

  const currentCount = Number(router.query.count || 0);

  function updateShallow() {
    router.push(
      `/shallow-routing-demo?count=${currentCount + 1}`,
      undefined,
      { shallow: true } // <-- KHONG goi lai getServerSideProps
    );
  }

  function updateNormal() {
    router.push(`/shallow-routing-demo?count=${currentCount + 1}`); // shallow mac dinh la false
  }

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '32px 24px', fontFamily: 'sans-serif' }}>
      <p>
        <Link href="/">← Về trang chủ (App Router)</Link>
      </p>
      <p style={{ fontSize: 12, background: '#eef', padding: 8, borderRadius: 6 }}>
        ⚠️ Trang này thuộc <b>Pages Router</b> (file <code>pages/shallow-routing-demo.js</code>),
        nên không dùng chung <code>app/layout.js</code> của App Router — vì Pages
        Router có hệ thống layout riêng (qua <code>pages/_app.js</code>), độc lập
        với App Router.
      </p>

      <h1>Shallow Routing (Pages Router)</h1>
      <p>
        <code>getServerSideProps</code> chạy trên server và trả về{' '}
        <code>renderedAt</code>. Số lần nó THỰC SỰ chạy lại được đếm ở biến
        "Số lần gọi lại dữ liệu" bên dưới.
      </p>

      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '16px 0' }}>
        <tbody>
          <tr>
            <td style={cellStyle}>renderedAt (từ getServerSideProps)</td>
            <td style={cellStyle}>
              <code>{renderedAt}</code>
            </td>
          </tr>
          <tr>
            <td style={cellStyle}>Số lần gọi lại dữ liệu (kể từ khi mở trang)</td>
            <td style={cellStyle}>
              <b>{fetchCount}</b>
            </td>
          </tr>
          <tr>
            <td style={cellStyle}>Query hiện tại (?count=)</td>
            <td style={cellStyle}>{currentCount}</td>
          </tr>
        </tbody>
      </table>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', margin: '16px 0' }}>
        <button onClick={updateShallow} style={btnStyle('#16a34a')}>
          Shallow push (shallow: true)
        </button>
        <button onClick={updateNormal} style={btnStyle('#dc2626')}>
          Push thường (shallow: false)
        </button>
      </div>

      <p style={{ fontSize: 14 }}>
        <b>Cách quan sát:</b> Bấm nhiều lần nút xanh — URL và số "count" đổi
        liên tục nhưng <code>renderedAt</code> và "Số lần gọi lại dữ liệu"{' '}
        <u>đứng yên</u> (không gọi lại getServerSideProps). Bấm nút đỏ 1 lần —
        "Số lần gọi lại dữ liệu" tăng lên và <code>renderedAt</code> đổi giá
        trị, vì trang được yêu cầu lại dữ liệu từ server.
      </p>
    </div>
  );
}

const cellStyle = { border: '1px solid #ddd', padding: '8px 10px', fontSize: 14 };
function btnStyle(bg) {
  return {
    background: bg,
    color: '#fff',
    border: 'none',
    padding: '10px 14px',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: 13,
    fontWeight: 600,
  };
}
