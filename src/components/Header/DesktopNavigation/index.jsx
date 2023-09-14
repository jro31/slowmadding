import navLinks from '@/lib/navLinks'
import NavItem from './NavItem'

const DesktopNavigation = (props) => {
  return (
    <nav {...props}>
      <ul className="flex whitespace-nowrap rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {navLinks.map((link) => (
          <NavItem key={`desktop-${link.text}-nav-link`} href={link.path}>
            {link.text}
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}

export default DesktopNavigation
