export default function SecurityPage() {
  return (
    <div>
      <h3>Bảo mật (Security)</h3>
      <p>URL: <code>/nested-routing/settings/security</code></p>
      <p>
        Chuyển qua lại giữa "Hồ sơ" và "Bảo mật": phần layout Settings (thanh
        bên) KHÔNG bị render lại — chỉ phần nội dung con thay đổi.
      </p>
    </div>
  );
}
