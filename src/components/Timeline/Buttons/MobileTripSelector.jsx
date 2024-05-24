import { Popover } from '@headlessui/react'

import OverlayMenu from '@/components/OverlayMenu'

const MobileTripSelector = ({
  currentTimeline,
  timelines,
  setCurrentTimeline,
}) => {
  return (
    <div className="flex flex-1 justify-center lg:hidden">
      <OverlayMenu title={currentTimeline}>
        {Object.keys(timelines).map((timelineName) => (
          <li key={`${timelineName}-timeline-mobile-link`}>
            <Popover.Button
              className="block py-2"
              onClick={(e) => setCurrentTimeline(e.target.textContent)}
            >
              {timelineName}
            </Popover.Button>
          </li>
        ))}
      </OverlayMenu>
    </div>
  )
}

export default MobileTripSelector
