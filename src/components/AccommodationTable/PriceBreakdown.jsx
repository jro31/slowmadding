import TableItem from './TableItem'

const PriceBreakdown = ({ dates, currency, sectionsObject }) => {
  const totalPrice = Object.values(sectionsObject).reduce(
    (acc, curr) => acc + curr,
    0
  )

  const parsedSectionsObject = () => {
    let returnObj = {}

    Object.keys(sectionsObject).map(
      (key) => (returnObj[key] = `${sectionsObject[key]} ${currency}`)
    )
    returnObj['total'] = `${totalPrice} ${currency}`
    // TODO: Use dates to calculate number of nights and add 'Price per night'

    return returnObj
  }

  return <TableItem heading="What I paid:" content={parsedSectionsObject()} />
}

export default PriceBreakdown
