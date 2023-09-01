// TODO: Can the data for this page be generated in getStaticProps?

import { Fragment, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { CheckCircleIcon, PlayIcon } from '@heroicons/react/20/solid'
import { XCircleIcon } from '@heroicons/react/24/outline'

import SimpleLayout from '@/components/SimpleLayout'
import { Card } from '@/components/Card'

import {
  articlePath,
  country,
  criteria,
  criteriaHeadings,
  description,
  place,
  placesData,
  verdict,
} from '@/lib/placesData'

const gridColsClass = `grid-cols-[minmax(159px,1fr)_repeat(${
  Object.keys(criteriaHeadings).length
},minmax(150px,2fr))]` // grid-cols-[minmax(159px,1fr)_repeat(7,minmax(150px,2fr))]

const placeDataDetaislId = (placeData) =>
  `${placeData[place].replaceAll(' ', '-').toLowerCase()}-${placeData[country]
    .replaceAll(' ', '-')
    .toLowerCase()}-details`

const placeDataContainsDescription = (placeData) =>
  Object.keys(placeData[criteria])
    .map((criterion) => Object.keys(placeData[criteria][criterion]))
    .flat()
    .includes(description)

const PlacesTable = () => {
  const placesTableRef = useRef()

  const scrollTableLeft = () => {
    placesTableRef.current.scrollLeft = placesTableRef.current.scrollLeft - 158
  }

  const scrollTableRight = () => {
    placesTableRef.current.scrollLeft = placesTableRef.current.scrollLeft + 158
  }

  return (
    <>
      <div className="mb-1 flex cursor-pointer justify-end gap-1">
        <PlayIcon
          onClick={scrollTableLeft}
          className="h-6 w-4 rotate-180 text-zinc-500 dark:text-zinc-400"
        />
        <PlayIcon
          onClick={scrollTableRight}
          className="h-6 w-4 text-zinc-500 dark:text-zinc-400"
        />
      </div>
      {/* Max-height should be expanded as content is added to the table, until the content is sufficient to fill 75vh on all screen sizes, at which point it can be removed altogether. */}
      <div
        ref={placesTableRef}
        className="no-scrollbar relative h-[75vh] max-h-[54rem] overflow-scroll scroll-smooth rounded-2xl border border-zinc-100 p-6 pl-0 pt-0 dark:border-zinc-700/40"
      >
        <div
          className={`grid w-min ${gridColsClass} items-center justify-items-center gap-y-6 gap-x-2`}
        >
          <div className="sticky left-0 top-0 z-10 h-full w-full bg-white px-6 pt-6 dark:bg-zinc-900"></div>
          {Object.values(criteriaHeadings).map((heading) => (
            <div
              key={`${heading}-table-heading`}
              className="sticky top-0 h-full bg-white pt-6 text-center text-sm font-medium text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100"
            >
              {heading}
            </div>
          ))}
          {placesData.map((placeData) => (
            <Fragment
              key={`${placeData[place]}-${placeData[country]}-table-data`}
            >
              <PlacesTablePlaceTag placeData={placeData}>
                <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {placeData[place]}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  {placeData[country]}
                </div>
              </PlacesTablePlaceTag>
              {Object.keys(placeData[criteria]).map((criterion) => (
                <div
                  key={`${placeData[place]}-${placeData[country]}-${criterion}-data`}
                >
                  <VerdictIcon
                    verdict={placeData[criteria][criterion][verdict]}
                    title={placeData[criteria][criterion][description]}
                  />
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  )
}

const PlacesTablePlaceTag = ({ placeData, children }) => {
  const classNames =
    'sticky left-0 w-full justify-self-start bg-white px-6 dark:bg-zinc-900'

  return placeDataContainsDescription(placeData) ? (
    <Link href={`#${placeDataDetaislId(placeData)}`} className={classNames}>
      {children}
    </Link>
  ) : (
    <div className={classNames}>{children}</div>
  )
}

const VerdictIcon = ({ verdict, title }) => {
  return verdict ? (
    <CheckCircleIcon
      className="h-8 w-8 text-zinc-900 dark:text-zinc-100"
      title={title}
    />
  ) : (
    <XCircleIcon
      className="h-8 w-8 text-zinc-500 dark:text-zinc-400"
      title={title}
    />
  )
}

const PlacesDetails = () => {
  return (
    <div className="mt-20 space-y-20">
      {placesData.map(
        (placeData) =>
          placeDataContainsDescription(placeData) && (
            <PlaceSection
              key={`${placeData[place]}-${placeData[country]}-details-data`}
              placeData={placeData}
            >
              <ul role="list" className="space-y-16">
                {Object.keys(placeData[criteria]).map(
                  (criterion) =>
                    placeData[criteria][criterion][description] && (
                      <PlaceDetail
                        key={`${placeData[place]}-${placeData[country]}-${criterion}-details`}
                        criterion={criterion}
                        verdict={placeData[criteria][criterion][verdict]}
                      >
                        {placeData[criteria][criterion][description]}
                      </PlaceDetail>
                    )
                )}
              </ul>
            </PlaceSection>
          )
      )}
    </div>
  )
}

const PlaceSection = ({ placeData, children }) => {
  const titleId = placeDataDetaislId(placeData)

  return (
    <section
      aria-labelledby={titleId}
      className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
    >
      <div className="group relative grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <PlaceSectionHeadingContainer
          articlePath={placeData[articlePath] || null}
        >
          <h2 id={titleId} className="flex flex-col">
            <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
              {placeData[place]}
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              {placeData[country]}
            </span>
          </h2>
        </PlaceSectionHeadingContainer>
        <div className="md:col-span-3">{children}</div>
      </div>
    </section>
  )
}

const PlaceSectionHeadingContainer = ({ articlePath, children }) => {
  return articlePath ? (
    <Card.Link href={articlePath}>{children}</Card.Link>
  ) : (
    <div>{children}</div>
  )
}

const PlaceDetail = ({ criterion, verdict, children }) => {
  return (
    <Card as="li">
      <div className="flex gap-3">
        <Card.Title as="h3">{criteriaHeadings[criterion]}</Card.Title>
        <VerdictIcon verdict={verdict} />
      </div>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

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
        <PlacesTable />
        <PlacesDetails />
      </SimpleLayout>
    </>
  )
}

export default Places
