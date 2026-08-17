/**
 * PARALLEL ROUTING - Buoc 1: Layout nhan vao nhieu "slot" cung luc.
 * - `children` la slot mac dinh (tuong ung file page.js cung cap).
 * - `team` la slot ung voi thu muc "@team".
 * - `analytics` la slot ung voi thu muc "@analytics".
 * Ten prop (team, analytics) PHAI trung voi ten thu muc sau dau @.
 * Ca 3 slot duoc render DONG THOI trong cung 1 lan render server.
 */
export default function ParallelRoutingLayout({ children, team, analytics }) {
  return (
    <div>
      <span className="badge">app/parallel-routing/layout.js</span>
      <h1>Parallel Routing (Định tuyến song song)</h1>
      <p>
        Layout này render <strong>3 phần độc lập cùng một lúc</strong>: slot mặc
        định (children), slot <code>@team</code> và slot <code>@analytics</code>.
        Mỗi slot có thể có trạng thái loading/error riêng, không phụ thuộc lẫn
        nhau.
      </p>

      <div className="card">{children}</div>

      <div className="parallel-grid">
        <div className="parallel-slot">{team}</div>
        <div className="parallel-slot">{analytics}</div>
      </div>
    </div>
  );
}
