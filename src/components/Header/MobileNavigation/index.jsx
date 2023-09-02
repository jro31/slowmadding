import navLinks from '@/lib/navLinks'
import MobileNavItem from './MobileNavItem'
import OverlayMenu from '@/components/OverlayMenu'

const MobileNavigation = (props) => {
  return (
    <OverlayMenu {...props} menutag="nav">
      {navLinks.map((link) => (
        <MobileNavItem key={`mobile-${link.text}-nav-link`} href={link.path}>
          {link.text}
        </MobileNavItem>
      ))}
    </OverlayMenu>
  )
}

export default MobileNavigation
