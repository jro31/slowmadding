import Head from 'next/head'

import SimpleLayout from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import ActivityList from '@/components/ActivityList'

const title =
  "The good, the bad and the ugly of what I've learned being a nomad"
const description =
  'My thoughts on the best places in the world to sit in a dark room on your computer.'

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Articles</title>
        <meta name="description" content={`${title} ${description}`} />
      </Head>
      <SimpleLayout title={title} intro={description}>
        <ActivityList activities={articles} />
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
