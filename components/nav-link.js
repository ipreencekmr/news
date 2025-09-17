'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({href, value}) {
  const path = usePathname();
  return (
   <Link href={href} className={path.startsWith(href) ? 'active' : ''}>{value}</Link>
  );
}