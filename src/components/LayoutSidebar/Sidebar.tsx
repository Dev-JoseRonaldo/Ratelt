'use client';
import { SideNav } from '@/components/LayoutSidebar/Sidenav';

import { cn } from '@/lib/utils';
import { NavItems } from '@/components/constants/adminNavItems';
import { Logo } from '../Logo';

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  return (
    <nav
      className={cn(
        `fixed top-0 hidden h-screen w-72 md:flex md:flex-col md:justify-between bg-muted pt-[32px]`,
        className,
      )}
    >
      <div className="pb-4">
        <div className="px-3 pb-2 h-full">
          <div className="space-y-1 h-full">
            <div className="text-center flex justify-center mb-[42px]">
              <Logo size="large" />
            </div>
            <SideNav items={NavItems} />
          </div>
        </div>
      </div>
    </nav>
  );
}
