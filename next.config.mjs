/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * VI DU #2 CUA "REDIRECTING ROUTING": Config-based redirect.
   * Day la cach khai bao redirect TINH (static), duoc Next.js xu ly RAT SOM
   * trong vong doi request - truoc ca Proxy va truoc khi tim page tuong ung.
   * Uu diem: khong can code, khong ton 1 lan render nao ca.
   * Nhuoc diem: chi dung cho cac quy tac co dinh, khong doc duoc cookie/header dong.
   */
  async redirects() {
    return [
      {
        source: '/redirecting-routing/old-page',
        destination: '/redirecting-routing/target',
        permanent: false, // false -> HTTP 307 (tam thoi) | true -> HTTP 308 (vinh vien)
      },
    ];
  },
};

export default nextConfig;
