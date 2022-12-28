import BookingPlatform from './BookingPlatform'
import Dates from './Dates'
import PriceBreakdown from './PriceBreakdown'
import RoomType from './RoomType'

const AccommodationTable = ({ details }) => {
  return (
    <div>
      <div className="flex flex-col gap-5 sm:gap-2">
        <Dates dates={details.dates} />
        <BookingPlatform
          name={details.platform.name}
          url={details.platform.url}
        />
        {details.roomType && <RoomType roomType={details.roomType} />}
        <PriceBreakdown
          dates={details.dates}
          currencyPrefix={details.price.currencyPrefix}
          currencySuffix={details.price.currencySuffix}
          sectionsObject={details.price.sections}
        />
      </div>
    </div>
  )
}

export default AccommodationTable
