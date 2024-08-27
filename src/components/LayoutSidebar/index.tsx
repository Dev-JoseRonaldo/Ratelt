import React from 'react';
import Header from '@/components/LayoutSidebar/Header';
import Sidebar from '@/components/LayoutSidebar/Sidebar';

export const LayoutAdmin = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="flex h-screen border-collapse overflow-hidden ">
        <Sidebar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden md:pl-72 bg-secondary/10">
          {children}
        </main>
      </div>
    </>
  );
};
