import Link from 'next/link'
import NavItems from './NavItems'
import MobileNav from './MobileNav'
import { ModeToggle } from './mode-toggle'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <div className="w-full  border-b  ">
      <div className=" flex justify-between items-center w-full  p-6">
        <Link href="/" className="w-full">
          <h1>Batik Task Manager</h1>
        </Link>

        <SignedIn>
          <nav className="md:inline-flex hidden w-full justify-end">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <div className="flex items-center gap-x-4">
              <div className="md:mx-6">
                <UserButton afterSignOutUrl="/" />
              </div>
              <MobileNav />
            </div>
          </SignedIn>

          <SignedOut>
            <Button asChild className="mr-2" size="default">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
        <div className="md:inline-flex hidden">
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
export default Header
