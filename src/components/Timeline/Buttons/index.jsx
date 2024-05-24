import ViewButtons from './ViewButtons'
import MobileTripSelector from './MobileTripSelector'
import DesktopTripSelector from './DesktopTripSelector'

const Buttons = ({
  currentTimeline,
  timelines,
  setCurrentTimeline,
  ascending,
  setAscending,
  compactMode,
  setCompactMode,
}) => {
  return (
    <div className="relative mb-3 flex">
      <MobileTripSelector
        currentTimeline={currentTimeline}
        timelines={timelines}
        setCurrentTimeline={setCurrentTimeline}
      />
      <DesktopTripSelector
        timelines={timelines}
        currentTimeline={currentTimeline}
        setCurrentTimeline={setCurrentTimeline}
      />
      <ViewButtons
        ascending={ascending}
        setAscending={setAscending}
        compactMode={compactMode}
        setCompactMode={setCompactMode}
      />
    </div>
  )
}

export default Buttons
