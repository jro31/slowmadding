import Head from 'next/head'

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404: This page could not be found</title>
      </Head>
      <div className="flex h-screen flex-col items-center justify-center text-center text-zinc-800 dark:text-zinc-100">
        <div className="leading-12">
          <h1 className="mr-5 inline-block border-r border-black/30 pr-5.75 align-top text-2xl leading-12 font-medium dark:border-white/30">
            404
          </h1>
          <div className="inline-block">
            <h2 className="text-sm leading-7 font-normal">
              This page could not be found.
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
