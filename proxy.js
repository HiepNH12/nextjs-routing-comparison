import { NextResponse } from 'next/server';

/**
 * VI DU #3 CUA "REDIRECTING ROUTING": Proxy-based redirect (co dieu kien).
 *
 * LUU Y QUAN TRONG VE PHIEN BAN:
 * - Truoc Next.js 16: file nay ten la "middleware.js", ham xuat ten la "middleware".
 * - Tu Next.js 16 tro di: file duoc doi ten thanh "proxy.js", ham xuat ten la "proxy".
 *   Neu ban de nham ten file la middleware.js trong du an Next.js 16, Next.js se
 *   AM THAM BO QUA file do (khong bao loi) -> route se khong bi redirect nhu mong doi.
 *
 * Proxy chay o Edge Runtime, truoc khi request cham toi bat ky Page nao, va chay
 * SAU khi next.config.mjs "redirects()" da duoc kiem tra. No phu hop cho redirect
 * dua tren dieu kien DONG: cookie, header, A/B testing, kiem tra dang nhap...
 */
export function proxy(request) {
  const { pathname, searchParams } = request.nextUrl;

  const isProxyDemoRoute = pathname === '/redirecting-routing/proxy-demo';
  const wantsRedirect = searchParams.get('redirect') === 'true';

  if (isProxyDemoRoute && wantsRedirect) {
    const url = request.nextUrl.clone();
    url.pathname = '/redirecting-routing/target';
    url.searchParams.delete('redirect');
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// matcher gioi han Proxy chi chay tren nhanh /redirecting-routing/*
// de khong lam cham cac request khac (anh, CSS, cac route khong lien quan).
export const config = {
  matcher: ['/redirecting-routing/:path*'],
};
