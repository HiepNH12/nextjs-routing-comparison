// Noi dung cua slot "@team", khop voi URL /parallel-routing
export default function TeamSlot() {
  return (
    <div>
      <h3>👥 Team (slot: @team)</h3>
      <p>
        File: <code>app/parallel-routing/@team/page.js</code>
      </p>
      <p>Nội dung này render song song, hoàn toàn độc lập với @analytics.</p>
    </div>
  );
}
