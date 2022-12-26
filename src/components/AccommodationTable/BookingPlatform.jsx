import TableItem from './TableItem'

const BookingPlatform = ({ name, url }) => {
  return <TableItem heading="Booked on" content={name} url={url} />
}

export default BookingPlatform
