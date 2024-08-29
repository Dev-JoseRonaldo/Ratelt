'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { SideNav } from '@/components/LayoutSidebar/Sidenav';
import { NavItems } from '@/components/constants/adminNavItems';
import { useState } from 'react';
import Hamburger from 'hamburger-react';
import { Logo } from '../Logo';

export const MobileSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <div className="w-full flex items-center justify-between gap-2">
            <Hamburger toggled={open} toggle={setOpen}/>{' '}
          </div>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-72 flex flex-col justify-between"
        >
          <div>
            <div className="text-center flex justify-center">
              <Logo />
            </div>
            <div className=" flex flex-col items-center justify-center mt-6 border-b-2">
             
            </div>
            <div className="px-1 py-6 ">
              <SideNav items={NavItems} />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
