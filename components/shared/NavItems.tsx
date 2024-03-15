'use client'

import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
  const pathName = usePathname()
  return (
    <ul className=" flex flex-col md:flex-row gap-5 md:items-center">
      {headerLinks.map((link) => (
        <li
          key={link.label}
          className={`${
            pathName === link.route
              ? 'text-blue-500 p-medium-16 whitespace-nowrap'
              : ''
          }`}
        >
          <Link className="flex gap-2 text-sm items-center" href={link.route}>
            {React.createElement(link.icon)} {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
export default NavItems
