import { Fragment } from 'react'
import Head from 'next/head'

import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { XCircleIcon } from '@heroicons/react/24/outline'

import SimpleLayout from '@/components/SimpleLayout'

import {
  country,
  criteria,
  criteriaHeadings,
  place,
  placesData,
  verdict,
} from '@/lib/placesData'

const gridColsClass = `grid-cols-[minmax(159px,1fr)_repeat(${
  Object.keys(criteriaHeadings).length
},minmax(150px,2fr))]` // grid-cols-[minmax(159px,1fr)_repeat(7,minmax(150px,2fr))]

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
        intro="A massive oversimplification of each place as a digital nomad destination."
      >
        <div className="no-scrollbar relative overflow-scroll rounded-2xl border border-zinc-100 p-6 pl-0 dark:border-zinc-700/40">
          <div
            className={`grid w-min ${gridColsClass} items-center justify-items-center gap-y-6 gap-x-2`}
          >
            <div className="sticky left-0 h-full w-full bg-gradient-to-r from-white via-white to-transparent px-6 dark:from-zinc-900 dark:via-zinc-900"></div>
            {Object.values(criteriaHeadings).map((heading) => (
              <div
                key={`${heading}-table-heading`}
                className="self-end text-center text-sm font-medium text-zinc-900 dark:text-zinc-100"
              >
                {heading}
              </div>
            ))}
            {placesData
              .sort((a, b) =>
                a[place] > b[place] ? 1 : b[place] > a[place] ? -1 : 0
              )
              .map((placeData) => (
                <Fragment
                  key={`${placeData[place]}-${placeData[country]}-data`}
                >
                  <div className="sticky left-0 w-full justify-self-start bg-gradient-to-r from-white via-white to-transparent px-6 dark:from-zinc-900 dark:via-zinc-900">
                    <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {placeData[place]}
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      {placeData[country]}
                    </div>
                  </div>
                  {Object.keys(placeData[criteria]).map((criterion) => (
                    <div
                      key={`${placeData[place]}-${placeData[country]}-${criterion}-data`}
                    >
                      {placeData[criteria][criterion][verdict] ? (
                        <CheckCircleIcon className="h-8 w-8 text-zinc-900 dark:text-zinc-100" />
                      ) : (
                        <XCircleIcon className="h-8 w-8 text-zinc-500 dark:text-zinc-400" />
                      )}
                    </div>
                  ))}
                </Fragment>
              ))}
          </div>
        </div>

        {/* TODO: Give the table a maximum height (something smaller than 100vh, although perhaps also give a min for very small screens (like a landscape mobile)), then stick the headings to the top of it when scrolling vertically (just like the place is stuck to the left when scrolling horizontally) */}
        {/* That way when it grows sufficiently, or when on a smaller screen, you'll be able to see what criteria you're looking at */}
        {/* TODO: Hover over an icon to display the description? */}
        {/* TODO: Add a section about each place, with the verdict and description for each criteria. Possibly also add a summary here. */}
      </SimpleLayout>
    </>
  )
}

export default Places
