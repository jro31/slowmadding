import Image from 'next/image'
import Link from 'next/link'

import logoInstagram from '@/logos/instagram.svg'

export const platforms = {
  instagram: 'Instagram',
}

const logoSrc = 'Logo source'
const logoAlt = 'Logo alt text'
const url = 'URL'

const CircledIcon = ({ platform }) => {
  const platformDetails = () => {
    switch (platform) {
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
    <Link
      href={platformDetails()[url]}
      target="_blank"
      className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
    >
      <Image
        src={platformDetails()[logoSrc]}
        alt={platformDetails()[logoAlt]}
        title=""
        className="h-6 w-6"
        unoptimized
      />
    </Link>
  )
}

export default CircledIcon
