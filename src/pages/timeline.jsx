import Head from 'next/head'

import SimpleLayout from '@/components/SimpleLayout'

const Timeline = () => {
  return (
    <>
      <Head>
        <title>Timeline</title>
        <meta name="description" content="My digital nomad itinerary." />
      </Head>
      <SimpleLayout
        title="Where and when"
        // intro=""
      >
        TIMELINE GOES HERE
      </SimpleLayout>
    </>
  )
}

export default Timeline
