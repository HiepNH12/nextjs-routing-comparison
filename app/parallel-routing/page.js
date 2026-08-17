// Day la noi dung cua SLOT MAC DINH (children) trong ParallelRoutingLayout.
export default function ParallelRoutingPage() {
  return (
    <p>
      Đây là nội dung của slot mặc định <code>children</code>, tương ứng file{' '}
      <code>app/parallel-routing/page.js</code>. Hai khối bên dưới (Team,
      Analytics) là 2 slot song song khác, đến từ 2 thư mục{' '}
      <code>@team</code> và <code>@analytics</code>.
    </p>
  );
}
