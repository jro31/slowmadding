import { Fragment } from 'react'
import Head from 'next/head'

import SimpleLayout from '@/components/SimpleLayout'

const thailand = 'Thailand'

const place = 'place'
const country = 'country'
const lastVisited = 'lastVisited'
const criteria = 'criteria'
const articlePath = 'articlePath'

const affordable = 'affordable'
const internet = 'internet'
const running = 'running'
const veganFood = 'veganFood'
const safe = 'safe'
const social = 'social'
const walking = 'walking'

const verdict = 'verdict'
const description = 'description'

const criteriaHeadings = {
  [affordable]: 'Affordable',
  [internet]: 'Fast and reliable Internet',
  [running]: 'Good places to run',
  [veganFood]: 'Good availability and variety of vegan food',
  [safe]: 'Safe',
  [social]: 'Sufficient social opportunities',
  [walking]: 'Pleasant to walk around',
}

const placesData = [
  {
    [place]: 'Bangkok',
    [country]: thailand,
    [lastVisited]: '2022',
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]: 'Bangkok is very affordable because...',
      },
      [internet]: {
        [verdict]: true,
        [description]: 'The Internet in Bangkok is...',
      },
      [running]: {
        [verdict]: true,
      },
      [veganFood]: {
        [verdict]: true,
      },
      [safe]: {
        [verdict]: true,
      },
      [social]: {
        [verdict]: true,
      },
      [walking]: {
        [verdict]: true,
      },
    },
    [articlePath]: '',
  },
]

const gridColsClass = `grid-cols-[minmax(min-content,1fr)_repeat(${
  Object.keys(criteriaHeadings).length
},minmax(150px,2fr))]` // grid-cols-[minmax(min-content,1fr)_repeat(7,minmax(150px,2fr))]

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
            {placesData.map((placeData) => (
              <Fragment key={`${placeData[place]}-${placeData[country]}-data`}>
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
                    {placeData[criteria][criterion][verdict] ? '✅' : '❌'}
                  </div>
                ))}
              </Fragment>
            ))}
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
