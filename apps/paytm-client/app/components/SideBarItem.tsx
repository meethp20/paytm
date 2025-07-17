'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Archive from './Archive';
import HomeB from './Home';
import TransactionB from './TransactionB';

export default function SideBar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', icon: <HomeB />, label: 'Dashboard' },
    { href: '/transactions', icon: <Archive />, label: 'Transactions' },
    { href: '/transfer', icon: <TransactionB />, label: 'Transfer' },
  ];

  return (
    <div className="flex flex-col gap-2 p-4">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200 
              ${isActive 
                ? 'bg-purple-100 text-purple-700 font-semibold' 
                : 'text-gray-700 hover:bg-gray-100'}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}

