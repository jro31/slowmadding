import BookingPlatform from './BookingPlatform'
import PriceBreakdown from './PriceBreakdown'

const AccommodationTable = ({ details }) => {
  return (
    <div>
      <h3>{details.name}</h3>
      {/* TODO: When I was there */}
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
  )
}

export default AccommodationTable
