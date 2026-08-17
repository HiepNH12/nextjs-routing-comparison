import Link from 'next/link';

export default function TargetPage() {
  return (
    <div>
      <h1>🎯 Trang đích (Target)</h1>
      <p>Bạn đã được chuyển hướng đến đây thành công, bằng 1 trong 3 cơ chế redirect.</p>
      <Link href="/redirecting-routing" className="back-link">
        ← Quay lại trang tổng quan Redirecting Routing
      </Link>
    </div>
  );
}
