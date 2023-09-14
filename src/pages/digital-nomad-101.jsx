import Head from 'next/head'

import SimpleLayout from '@/components/SimpleLayout'

const title = 'All you need to know to become a digital nomad' // TODO: Update this?
const description = '' // TODO

const DigitalNomad101 = () => {
  return (
    <>
      <Head>
        <title>Digital Nomad 101</title>
        <meta name="description" content={`${title} ${description}`} />
      </Head>
      <SimpleLayout title={title}>{/* TODO */}</SimpleLayout>
    </>
  )
}

export default DigitalNomad101
