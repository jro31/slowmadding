import BookingPlatform from './BookingPlatform'
import Dates from './Dates'
import PriceBreakdown from './PriceBreakdown'

const AccommodationTable = ({ details }) => {
  return (
    <div>
      <h3>{details.name}</h3>
      <div className="flex flex-col gap-5 sm:gap-2">
        <Dates dates={details.dates} />
        <BookingPlatform
          name={details.platform.name}
          url={details.platform.url}
        />
        {/* TODO: Room type */}
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
