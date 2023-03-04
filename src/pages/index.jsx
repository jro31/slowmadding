import Image from 'next/image'
import Head from 'next/head'
import clsx from 'clsx'

import ActivityList from '@/components/ActivityList'
import { Container } from '@/components/Container'
import yogaInTheParkImage from '@/images/homepage-photos/yoga-in-the-park.jpeg'
import sukhumvit22AtNightImage from '@/images/homepage-photos/sukhumvit-22-at-night.jpeg'
import reformKafeSmoothieBowlImage from '@/images/homepage-photos/reform-kafe-smoothie-bowl.jpeg'
import sihanoukNorodomAtNightImage from '@/images/homepage-photos/sihanouk-norodom-at-night.jpeg'
import saikaewResortLakeImage from '@/images/homepage-photos/saikaew-resort-lake.jpeg'
import { generateRssFeed } from '@/lib/generateRssFeed'

import collateActivity from '@/lib/collateActivity'

const title = 'Software engineer, digital nomad, insipid writer.'
const description =
  "I'm Jethro, a nomadic software engineer. I spend my life moving around to some of the most amazing places in the world, then sit in my room coding all day. These are my stories."

const images = [
  {
    src: yogaInTheParkImage,
    alt: 'Yoga in the Park in Chiang Mai',
  },
  {
    src: sukhumvit22AtNightImage,
    alt: 'Sukhumvit soi 22 in Bangkok at night, taken from the balcony of V Check Inn hotel',
  },
  {
    src: reformKafeSmoothieBowlImage,
    alt: 'Smoothie bowl at Reform Kafe in Chiang Mai',
  },
  {
    src: sihanoukNorodomAtNightImage,
    alt: 'Statue of Sihanouk Norodom in Phnom Penh at night',
  },
  {
    src: saikaewResortLakeImage,
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
            key={image.src.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
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
        <title>slowmadding.com</title>
        <meta name="description" content={`${title} ${description}`} />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
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

  const collatedActivity = await collateActivity()

  return {
    props: {
      activities: collatedActivity.slice(0, 4),
    },
  }
}
