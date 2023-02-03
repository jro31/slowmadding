// TODO: Add a search input to this page to search through the articles
// Do this by looking for search terms in various parts of the article, starting with the heading and prioritising exact phrase matches, followed by word matches
// Probably add a 'keywords' section to the articles, that contains important words not in the article heading
// (for example, 'Saigon' in any article about HCMC)

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
