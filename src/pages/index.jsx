import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import ActivityList from '@/components/ActivityList'
import { Container } from '@/components/Container'

import { platforms } from '@/components/CircledIcon'

import { generateRssFeed } from '@/lib/generateRssFeed'

import { getAllArticles } from '@/lib/getAllArticles'
import CircledIcon from '@/components/CircledIcon'

const title = 'Slowmadding - Your guide to being a digital nomad'
const description =
  'I spend my life moving around to some of the most amazing places in the world, then sit in my room coding all day. These are my stories.'

const imagePath = '/images/homepage-photos'
const images = [
  {
    src: `${imagePath}/yoga-in-the-park.jpeg`,
    alt: 'Yoga in the Park in Chiang Mai',
  },
  {
    src: `${imagePath}/sukhumvit-22-at-night.jpeg`,
    alt: 'Sukhumvit soi 22 in Bangkok at night, taken from the balcony of V Check Inn hotel',
  },
  {
    src: `${imagePath}/reform-kafe-smoothie-bowl.jpeg`,
    alt: 'Smoothie bowl at Reform Kafe in Chiang Mai',
  },
  {
    src: `${imagePath}/sihanouk-norodom-at-night.jpeg`,
    alt: 'Statue of Sihanouk Norodom in Phnom Penh at night',
  },
  {
    src: `${imagePath}/saikaew-resort-lake.jpeg`,
    alt: 'The lake at Saikaew Resort in Chiang Rai',
  },
]

const Photos = () => {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {images.map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <img
              src={image.src}
              alt={image.alt}
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const Home = ({ activities }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
          <div className="mt-6 flex gap-4">
            {Object.keys(platforms).map((platform) => (
              <CircledIcon
                key={`${platforms[platform]} logo`}
                as={Link}
                platform={platforms[platform]}
                size="small"
              />
            ))}
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <ActivityList activities={activities} />
      </Container>
    </>
  )
}

export default Home

export const getStaticProps = async () => {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  const articles = (await getAllArticles()).map(
    ({ component, ...meta }) => meta
  )

  return {
    props: {
      activities: articles.slice(0, 4),
    },
  }
}
