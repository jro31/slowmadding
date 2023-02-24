import Head from 'next/head'

import SimpleLayout from '@/components/SimpleLayout'

const Thailand = 'Thailand'

const PlacesData = [
  {
    place: 'Bangkok',
    country: Thailand,
    lastVisited: '2022',
    criteria: {
      affordable: {
        verdict: true,
        description: 'Bangkok is very affordable because...',
      },
      internet: {
        verdict: true,
        description: 'The Internet in Bangkok is...',
      },
    },
  },
]

const Places = () => {
  return (
    <>
      <Head>
        <title>Places</title>
        <meta
          name="description"
          content="A summary of digital nomad destinations."
        />
      </Head>
      <SimpleLayout
        title="Where I've been as a digital nomad and what I thought of it"
        intro="A summary of digital nomad destinations."
      >
        <div className="no-scrollbar relative overflow-scroll rounded-2xl border border-zinc-100 p-6 pl-0 dark:border-zinc-700/40">
          <div className="grid w-min grid-cols-[minmax(min-content,1fr)_repeat(6,minmax(150px,2fr))] items-center justify-items-center">
            <div className="sticky left-0 h-full w-full bg-gradient-to-r from-white via-white to-transparent px-6 dark:from-zinc-900 dark:via-zinc-900"></div>
            <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Affordable
            </div>
            <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Affordable
            </div>
            <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Affordable
            </div>
            <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Affordable
            </div>
            <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Affordable
            </div>
            <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Affordable
            </div>
            <div className="sticky left-0 w-full justify-self-start bg-gradient-to-r from-white via-white to-transparent px-6 dark:from-zinc-900 dark:via-zinc-900">
              <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Bangkok
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">
                Thailand
              </div>
            </div>
            <div>✅</div>
            <div>✅</div>
            <div>✅</div>
            <div>✅</div>
            <div>✅</div>
            <div>✅</div>
          </div>
        </div>

        {/* TODO: Add a table - This displays the 'verdicts' as ✅ or ❌. Hover over an icon to display the description */}
        {/* It'd be cool for smaller screens, if the left column stays in place while the rest of the table scrolls horizontally */}
        {/* TODO: Add a section about each place, with the verdict and description for each criteria. Possibly also add a summary here. */}
      </SimpleLayout>
    </>
  )
}

export default Places
