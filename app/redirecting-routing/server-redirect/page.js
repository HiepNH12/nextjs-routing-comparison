import { redirect } from 'next/navigation';

/**
 * VI DU #1 CUA "REDIRECTING ROUTING": redirect() trong Server Component.
 * redirect() nem ra 1 loi dac biet (NEXT_REDIRECT) de Next.js bat va
 * chuyen huong trinh duyet. Chi dung duoc trong Server Component,
 * Route Handler, hoac Server Action - KHONG dung trong Client Component.
 * Khong duoc dat trong try/catch bao quanh no vi se "nuot" mat tin hieu redirect.
 */
export default function ServerRedirectPage() {
  redirect('/redirecting-routing/target');
}
