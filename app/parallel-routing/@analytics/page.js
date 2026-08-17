// Noi dung cua slot "@analytics", khop voi URL /parallel-routing
export default function AnalyticsSlot() {
  return (
    <div>
      <h3>📊 Analytics (slot: @analytics)</h3>
      <p>
        File: <code>app/parallel-routing/@analytics/page.js</code>
      </p>
      <p>Slot này có thể tự fetch dữ liệu riêng, không cần chờ @team.</p>
    </div>
  );
}
