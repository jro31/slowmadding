import Image from 'next/image'

import logoStrava from '@/images/logos/strava.svg'
import logoInstagram from '@/images/logos/instagram.svg'

export const platforms = {
  strava: 'Strava',
  instagram: 'Instagram',
}

const logoSrc = 'Logo source'
const logoAlt = 'Logo alt text'
const url = 'URL'

const CircledIcon = ({ as: Component = 'div', platform, ...props }) => {
  const platformDetails = () => {
    switch (platform) {
      case platforms.strava:
        return {
          [logoSrc]: logoStrava,
          [logoAlt]: 'Strava logo',
          [url]: 'https://www.strava.com/athletes/10393790',
        }
      case platforms.instagram:
        return {
          [logoSrc]: logoInstagram,
          [logoAlt]: 'Instagram logo',
          [url]: 'https://www.instagram.com/jethro_31/',
        }
      default:
        throw new Error(
          `Platform '${platform}' not recognised in CircledIcon component`
        )
    }
  }

  return (
    <Component
      {...props}
      {...(Component === 'div'
        ? {}
        : { href: platformDetails()[url], target: '_blank' })}
      className={`relative z-10 flex items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 ${
        props.size === 'small' ? 'h-9 w-9' : 'h-12 w-12'
      }`}
    >
      <Image
        src={platformDetails()[logoSrc]}
        alt={platformDetails()[logoAlt]}
        title=""
        className={props.size === 'small' ? 'h-6 w-6' : 'h-8 w-8'}
        unoptimized
      />
    </Component>
  )
}

export default CircledIcon
