import { type NavItem } from '@/interfaces/navbarTypes';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import chartMan from '../../../public/assets/chartMan.png';

export function SideNav({ items }: { items: NavItem[] }) {
  const path = usePathname();

  return (
    <nav className="md:pl-4 md:pr-8 flex flex-col h-screen max-h-[1000px]">
      <div className="h-full">
        <div className='my-auto h-full flex flex-col items-center justify-center gap-2'>
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'h-[50px] flex justify-start pl-10 relative rounded-xl bg-transparent shadow-none text-[#AAB2C8] border-0 w-full',
                item.href === path &&
                  'bg-primary hover:bg-primary/80 text-white shadow-primary/70 shadow-md ',
              )}
            >
              <Image
                src={item.href === path ? item.ActivedIcon : item.MutedIcon}
                alt={`${item.title} icon`}
                width={20}
                height={20}
                className={cn('mr-4', item.href === path && 'text-white')}
              />
              <span className={cn('text-base duration-200')}>
                {item.title}
                {item.href === path && (
                  <div className="w-[5px] h-[48px] bg-primary border-primary absolute -left-[29px] top-[2px] rounded-r-md"></div>
                )}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="h-full flex flex-col justify-end pb-[140px]">
        <Image src={chartMan} alt="a man showing a chart" className="mt-10 w-44 mx-auto md:w-auto" />
        <Button label="Upgrade your plan" className="mt-5 w-full" />
      </div>
    </nav>
  );
}
