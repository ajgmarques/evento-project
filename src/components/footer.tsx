import Link from 'next/link';

const routes = [
  {
    path: '/terms-conditions',
    name: 'Terms & Conditions',
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
  },
];

export default function Footer() {
  return (
    <footer
      className='mt-auto flex items-center
      justify-between h-16 border-t border-white/10 text-white/25
      px-3 md:px-9 py-4'
    >
      <small className='text-xs'>&copy; 2050 Ajgm. All rights reserved.</small>

      <ul className='flex gap-x-3 sm:gap-x-8'>
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
