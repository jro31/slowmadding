import TableItem from './TableItem'

const Location = ({ location }) => {
  return (
    <TableItem
      heading="Location"
      content={location.name || location.url}
      url={location.url}
    />
  )
}

export default Location
