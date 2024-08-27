import { cn } from '@/lib/utils';
import { MobileSidebar } from '@/components/LayoutSidebar/Mobile-sidebar';
import SearchInput from '../SearchInput';
import DatePickerInput from '../DatePickerInput';
import Image from 'next/image';
import bellIcon from '../../../public/assets/notificationIcon.svg';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { DotFilledIcon, ExitIcon, GearIcon } from '@radix-ui/react-icons';

export default function Header() {
  return (
    <div className="fixed left-0 right-0 top-0 z-20 bg-white md:ml-72">
      <nav className="flex h-16 md:h-[140px] items-center justify-between">
        <div className={cn('md:!hidden w-full flex')}>
          <MobileSidebar />
        </div>

        <div className="hidden md:flex items-center justify-center gap-14 w-full px-24">
          <SearchInput placeholder="Search" />
          <DatePickerInput />
          <Image
            src={bellIcon}
            alt="Bell icon"
            className="w-44 md:w-auto cursor-pointer hover:scale-110"
          />
          <Popover>
            <PopoverTrigger className='flex'>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col -space-y-2 mt-1 text-muted-foreground">
                <DotFilledIcon />
                <DotFilledIcon />
                <DotFilledIcon />
              </div>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col w-[200px] max-w-[200px] rounded-2xl bg-white -translate-x-16">
              <Button
                icon={<GearIcon />}
                variant={'ghost'}
                label="Settings"
                className="font-semibold flex justify-start"
              />
              <Button
                icon={<ExitIcon />}
                variant={'ghost'}
                label="Log out"
                className="font-semibold flex justify-start"
              />
            </PopoverContent>
          </Popover>
        </div>
      </nav>
    </div>
  );
}
