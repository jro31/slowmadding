import BookingPlatform from './BookingPlatform'
import Dates from './Dates'
import Description from './Description'
import PriceBreakdown from './PriceBreakdown'
import RoomType from './RoomType'

const AccommodationTable = ({ details }) => {
  // TODO: Add a photo gallery
  return (
    <div>
      <h3 className="mt-8">{details.name}</h3>
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
        <Description paragraphsArray={details.description} />
      </div>
    </div>
  )
}

export default AccommodationTable
