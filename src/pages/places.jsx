import Head from 'next/head'

import SimpleLayout from '@/components/SimpleLayout'

const Places = () => {
  return (
    <>
      <Head>
        <title>Places</title>
        <meta
          name="description"
          content="A condensed summary of digital nomad destinations"
        />
      </Head>
      <SimpleLayout
        title="Places"
        intro="An summary of digital nomad destinations."
      ></SimpleLayout>
    </>
  )
}

export default Places
