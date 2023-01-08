import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import SimpleLayout from '@/components/SimpleLayout'
import logoHappyCow from '@/images/logos/happy-cow.svg'
import logoStrava from '@/images/logos/strava.svg'
import logoInstagram from '@/images/logos/instagram.svg'

const platforms = [
  {
    name: 'Happy Cow',
    description:
      'Happy Cow is a directory of places around the world to get vegan/vegetarian food. Such a resource is invaluable to me while travelling, so I do what I can to give back by adding photos and reviews of the restaurants that I go to.',
    link: {
      href: 'https://www.happycow.net/members/profile/Jrosworld',
      label: 'happycow.net',
    },
    logo: logoHappyCow,
  },
  {
    name: 'Strava',
    description:
      'Every time I go somewhere new, I try to find somewhere nice to run, so my most recent activity will give a good idea of where I am in the world.',
    link: {
      href: 'https://www.strava.com/athletes/10393790',
      label: 'strava.com',
    },
    logo: logoStrava,
  },
  {
    name: 'Instagram',
    description:
      "I don't post there often. But that means that the times I do, it's really worth seeing. I might add a picture of my lunch every few months.",
    link: {
      href: 'https://www.instagram.com/jethro_31/',
      label: 'instagram.com',
    },
    logo: logoInstagram,
  },
]

const LinkIcon = (props) => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

const Socials = () => {
  return (
    <>
      <Head>
        <title>Socials</title>
        <meta name="description" content="Where to find me" />
      </Head>
      <SimpleLayout
        title="Where to find me"
        intro="I'm not a big user of social media. At the time of writing, my last tweet was 6 months ago, my last Instagram post was 11 months ago, and my last Facebook post was 6 years ago. However, you might be able to get an idea of where I am and what I'm doing from the following places."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {platforms.map((platform) => (
            <Card as="li" key={platform.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={platform.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                {/* FIXME: These should open in a new tab */}
                <Card.Link href={platform.link.href}>{platform.name}</Card.Link>
              </h2>
              <Card.Description>{platform.description}</Card.Description>
              {/* FIXME: The links of adjacent cards should be aligned. Presently the link position is determined by the length of the text. */}
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{platform.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
      {/* TODO: Add a section linking to my other apps (at least to jethro.codes). */}
      {/* TODO: Perhaps also add a 'contact' section below that (although there could also be a separate 'contact' page) */}
    </>
  )
}

export default Socials
