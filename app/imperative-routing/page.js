'use client';

/**
 * IMPERATIVE ROUTING - dieu huong bang CODE, khong khai bao san trong JSX.
 * Doi lap voi Declarative Routing (dung the <Link href="...">).
 * Can 'use client' vi useRouter() (tu next/navigation) va onClick la
 * cac tinh nang chi chay duoc trong Client Component.
 */
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

export default function ImperativeRoutingPage() {
  const router = useRouter();
  const [log, setLog] = useState([]);

  function addLog(action) {
    const time = new Date().toLocaleTimeString('vi-VN');
    setLog((prev) => [`${time} — ${action}`, ...prev].slice(0, 6));
  }

  return (
    <div>
      <span className="badge">app/imperative-routing/page.js</span>
      <h1>Imperative Routing (Điều hướng theo lệnh)</h1>
      <p>
        Khác với <code>&lt;Link href="/x"&gt;</code> (khai báo sẵn đường dẫn
        ngay trong JSX), Imperative Routing dùng hook <code>useRouter()</code>{' '}
        để điều hướng bằng code — thường đặt sau một hành động: submit form,
        đăng nhập thành công, xử lý xong 1 tác vụ...
      </p>

      <div className="button-group">
        <button
          onClick={() => {
            addLog('router.push("/dynamic-routing/42")');
            router.push('/dynamic-routing/42');
          }}
        >
          router.push() → sản phẩm #42
        </button>

        <button
          onClick={() => {
            addLog('router.replace("/nested-routing")');
            router.replace('/nested-routing');
          }}
        >
          router.replace() → Nested Routing
        </button>

        <button
          onClick={() => {
            addLog('router.back()');
            router.back();
          }}
        >
          router.back()
        </button>

        <button
          onClick={() => {
            addLog('router.forward()');
            router.forward();
          }}
        >
          router.forward()
        </button>

        <button
          onClick={() => {
            addLog('router.refresh()');
            router.refresh();
          }}
        >
          router.refresh()
        </button>
      </div>

      <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>
        So sánh: <Link href="/dynamic-routing/42">đây là Declarative Routing</Link>{' '}
        tới cùng 1 sản phẩm #42 — chỉ 1 thẻ, không cần hàm xử lý.
      </p>

      <h3>Nhật ký hành động (client-side):</h3>
      {log.length === 0 ? (
        <p style={{ color: 'var(--text-dim)' }}>Chưa có hành động nào. Bấm 1 nút bất kỳ ở trên.</p>
      ) : (
        <ul className="log-list">
          {log.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
