// TODO: Add a table that details the number of days in each country
// TODO: Jazz-up the bullets - They could potentially be:
// - Numbers, starting from 1 at the bottom of the timeline that details how many stays I've had
// - Little flags of the country in question
// - A mix of both, where if I've only been to a place once, then it's a flag, but if I've been multiple times then it's a number corresponding to which stay it is
// TODO: Add images to some or all stays?
// - These should be on the opposite side of the timeline (desktop) or within the stay (mobile), and be a photo I took in that place.
// - Hide these in 'Compact' mode?
// TODO: Add Google Maps links to some or all stays?
// TODO: Add description to some or all stays?
// - Hide these in 'Compact' mode?
// TODO: Add the accommodation type somehow - feasibly using a logo in the bullet, such as a camping logo or an Airbnb logo
// TODO: There should be more empty space between stays (and countries) if there's a blank day or two between them
// TODO: You should be able to filter the timeline by a particular country/stay, for example if I just want to see my stays in Bangkok or in China, I can select these from a dropdown
// - This should be pan-timeline, so if I select 'Bangkok', it shows me my stays in Bangkok from ALL timelines, perhaps under new 'timeline' headings, such as 'Digital nomad' or 'Backpacking trip'

import { useState } from 'react'

import SimpleLayout from '../SimpleLayout'
import TimelineGraphic from './TimelineGraphic'
import Buttons from './Buttons'

const Timeline = ({
  title = null,
  timelines,
  defaultTimeline,
  mainPageFeature = true,
}) => {
  const [currentTimeline, setCurrentTimeline] = useState(defaultTimeline)
  const [ascending, setAscending] = useState(false)
  const [compactMode, setCompactMode] = useState(false)

  return (
    <SimpleLayout
      title={title}
      intro={timelines[currentTimeline].introText}
      {...(mainPageFeature
        ? {}
        : { HeaderTag: 'div', TitleTag: 'h2', titleSize: 'small' })}
    >
      <Buttons
        currentTimeline={currentTimeline}
        timelines={timelines}
        setCurrentTimeline={setCurrentTimeline}
        ascending={ascending}
        setAscending={setAscending}
        compactMode={compactMode}
        setCompactMode={setCompactMode}
      />

      <TimelineGraphic
        timelineData={timelines[currentTimeline].timelineData}
        ascending={ascending}
        compactMode={compactMode}
      />
    </SimpleLayout>
  )
}

export default Timeline
