import Link from 'next/link'
import { PopoverButton } from '@headlessui/react'

const MobileNavItem = ({ href, children }) => {
  return (
    <li>
      <PopoverButton as={Link} href={href} className="block py-2">
        {children}
      </PopoverButton>
    </li>
  )
}

export default MobileNavItem
