import Link from 'next/link'
import { Popover } from '@headlessui/react'

const MobileNavItem = ({ href, children }) => {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  )
}

export default MobileNavItem
