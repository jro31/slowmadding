import TableItem from './TableItem'
import useNumberOfNights from '@/hooks/use-number-of-nights'
import { formatDateRange } from '@/lib/formatDate'

const Dates = ({ dates }) => {
  const { checkIn, checkOut } = dates
  const numberOfNights = useNumberOfNights()

  const numberOfNightsString = () =>
    `(${numberOfNights(checkIn, checkOut)} nights)`

  const contentString = () => {
    return `<div>${formatDateRange(
      checkIn,
      checkOut
    )}</div><div>${numberOfNightsString()}</div>`
  }

  return <TableItem heading="When I was there" content={contentString()} />
}

export default Dates
