import Head from 'next/head'

import { parsedTimelineData } from '@/lib/timelineData'

import Timeline from '@/components/Timeline'
import BackToTopLink from '@/components/BackToTopLink'
import { Container } from '@/components/Container'

const title = 'Trips'

const digitalNomad = 'Digital nomad'
const backpackingTrip = 'Backpacking trip'
const mexico08 = "Mexico '08"
const dalhousie = 'Dalhousie'
const canada05 = "Canada '05"

const startDate = 'Start date'
const endDate = 'End date'

const timelineDates = {
  [digitalNomad]: {
    [startDate]: '2022-10-07',
    [endDate]: null,
  },
  [backpackingTrip]: {
    [startDate]: '2008-11-20',
    [endDate]: '2018-11-29',
  },
  // [mexico08]: {
  //   [startDate]: '2008-06-24',
  //   [endDate]: '2008-07-20',
  // },
  // [dalhousie]: {
  //   [startDate]: '2006-08-27',
  //   [endDate]: '2007-05-01',
  // },
  // [canada05]: {
  //   [startDate]: '2005-05-17',
  //   [endDate]: '2005-09-06',
  // },
}

const introText = {
  [digitalNomad]: 'Where being a digital nomad has taken me.',
  [backpackingTrip]:
    'Before I was a digital nomad, I went on a backpacking trip that started with being a lifty in Canada, led to working as an English teacher in Thailand and China, and finished with doing a coding bootcamp in Bali.',
  [mexico08]: 'A university reunion in Mexico.',
  [dalhousie]:
    'A university exchange to Dalhouse University in Nova Scotia with some time to travel over the Christmas break.',
  [canada05]:
    'My first time travelling was on the summer break after my first year of university, starting with a couple of months working in Vancouver before going by boat up to Alaska, then by bus from Anchorage to New York.',
}

const Trips = ({ timelines }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="A timeline of my digital nomad and backpacking trips."
        />
      </Head>
      <Timeline
        title="Trips"
        timelines={timelines}
        defaultTimeline={digitalNomad}
      />

      <Container className="mt-16 sm:mt-32">
        <BackToTopLink />
      </Container>
    </>
  )
}

export default Trips

export async function getStaticProps() {
  let timelineDetails = {}

  Object.keys(timelineDates).map((timelineName) => {
    timelineDetails[timelineName] = {
      introText: introText[timelineName],
      timelineData: parsedTimelineData(
        timelineDates[timelineName][startDate],
        timelineDates[timelineName][endDate]
      ),
    }
  })

  return {
    props: {
      timelines: timelineDetails,
    },
  }
}
