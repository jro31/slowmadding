import TableItem from './TableItem'

const BookingPlatform = ({ name, url }) => {
  return <TableItem heading="Booked with:" content={name} url={url} />
}

export default BookingPlatform
