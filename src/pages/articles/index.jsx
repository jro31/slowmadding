// TODO: Add a search input to this page to search through the articles
// Do this by looking for search terms in various parts of the article, starting with the heading and prioritising exact phrase matches, followed by word matches
// Probably add a 'keywords' section to the articles, that contains important words not in the article heading
// (for example, 'Saigon' in any article about HCMC)
// Also consider funny characters, like 'Neéko Vegan Junk Food' should return for 'Neeko'

import Head from 'next/head'

import { renderToString } from 'react-dom/server'

import SimpleLayout from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import ActivityList from '@/components/ActivityList'

const title =
  "The good, the bad and the ugly of what I've learned being a digital nomad."
const description =
  'My thoughts on the best places in the world to sit in a dark room on your computer.'

export default function ArticlesIndex({ articles }) {
  console.log(articles)

  // Although it does seem possible to pass all articles in through props here, I don't think that would be a good idea
  // They would then be present in the page source, and would load a lot of unnecessary data
  // I think better, would be to have a search input that appears only when an icon is clicked
  // At that point, a search component is loaded and all articles are loaded into it
  // These articles are then passed into the useArticleHeadings hook, and the returned headings are used as search criteria
  // Returns articles are then matched to the articles displayed on this page

  return (
    <>
      <Head>
        <title>Articles</title>
        <meta name="description" content={`${title} ${description}`} />
      </Head>
      <SimpleLayout title={title}>
        <ActivityList activities={articles} />
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  const articles = await getAllArticles()

  console.log('🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃')
  console.log(renderToString(articles[0].component().props.children))
  console.log('🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃')

  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
