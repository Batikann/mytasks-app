import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'

import Image from 'next/image'
import NavItems from './NavItems'
import { Menu } from 'lucide-react'
import { ModeToggle } from './mode-toggle'

const MobileNav = () => {
  return (
    <div className="md:hidden flex items-center gap-4">
      <ModeToggle />
      <Sheet>
        <SheetTrigger className="align-middle">
          <Menu />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6  md:hidden">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
          <Separator />
          <NavItems />
        </SheetContent>
      </Sheet>
    </div>
  )
}
export default MobileNav
