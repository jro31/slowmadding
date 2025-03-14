import BookingPlatform from './BookingPlatform'
import Dates from './Dates'
import PriceBreakdown from './PriceBreakdown'
import RoomType from './RoomType'

const AccommodationTable = ({ stays }) => {
  return stays.map((stay) => (
    <div key={`${stay.dates.checkIn}-to-${stay.dates.checkOut}-accommodation`}>
      <div className="flex flex-col gap-5 sm:gap-2">
        <Dates dates={stay.dates} />
        <BookingPlatform name={stay.platform.name} url={stay.platform.url} />
        {stay.roomType && <RoomType roomType={stay.roomType} />}
        <PriceBreakdown
          dates={stay.dates}
          currencyPrefix={stay.price.currencyPrefix}
          currencySuffix={stay.price.currencySuffix}
          sectionsObject={stay.price.sections}
        />
      </div>
    </div>
  ))
}

export default AccommodationTable
