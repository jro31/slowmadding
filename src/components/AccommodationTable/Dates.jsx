import TableItem from './TableItem'
import useNumberOfNights from '@/hooks/use-number-of-nights'
import { formatDate } from '@/lib/formatDate'

const Dates = ({ dates }) => {
  const { checkIn, checkOut } = dates
  const numberOfNights = useNumberOfNights()

  const datesString = () =>
    `${formatDate(checkIn, true)} to ${formatDate(checkOut, true)}`

  const numberOfNightsString = () =>
    `(${numberOfNights(checkIn, checkOut)} nights)`

  const contentString = () => {
    return `<div>${datesString()}</div><div>${numberOfNightsString()}</div>`
  }

  return <TableItem heading="When I was there" content={contentString()} />
}

export default Dates
