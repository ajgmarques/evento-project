'use client';
import Link from 'next/link';
import Logo from './logo';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import cn from '@/app/lib/utils/utils';

const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'All events',
    path: '/events/all',
  },
];

export default function Header() {
  const activePathname = usePathname();

  return (
    <header
      className='
    flex justify-between border-b border-white/20
    h-14 px-3 md:px-9 items-center
    '
    >
      <div>
        <Logo />
      </div>
      <nav className='h-full'>
        <ul className='flex gap-x-6 h-full text-sm'>
          {routes.map((route) => (
            <li
              key={route.path}
              className={cn(
                'hover:text-white flex items-center relative transition',
                {
                  'text-white': activePathname === route.path,
                  'text-white/50': activePathname !== route.path,
                }
              )}
            >
              <Link href={route.path}>{route.name}</Link>
              {activePathname === route.path && (
                <motion.div
                layoutId='header-active-link'
                className='bg-accent h-1 w-full absolute bottom-0'></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
