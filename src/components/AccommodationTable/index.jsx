import BookingPlatform from './BookingPlatform'
import Dates from './Dates'
import PriceBreakdown from './PriceBreakdown'
import RoomType from './RoomType'
import { formatDate } from '@/lib/formatDate'
import useNumberOfNights from '@/hooks/use-number-of-nights'

const AccommodationTable = ({ stays }) => {
  const numberOfNights = useNumberOfNights()

  const stayTable = (stay) => (
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
  )

  if (stays.length >= 3) {
    const totalNights = stays.reduce(
      (sum, stay) =>
        sum + numberOfNights(stay.dates.checkIn, stay.dates.checkOut),
      0
    )

    return (
      <>
        <p>
          I've stayed here {stays.length} times as a digital nomad, starting in
          {` ${formatDate(stays[0].dates.checkIn, true)
            .split(' ')
            .slice(1)
            .join(' ')}, `}
          for a total of {totalNights} nights, most recently...
        </p>
        {stayTable(stays[stays.length - 1])}
      </>
    )
  } else {
    return stays.map((stay) => stayTable(stay))
  }
}

export default AccommodationTable
