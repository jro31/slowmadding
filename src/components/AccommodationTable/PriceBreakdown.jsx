import TableItem from './TableItem'
import useNumberOfNights from '@/hooks/use-number-of-nights'

const PriceBreakdown = ({
  dates,
  currencyPrefix,
  currencySuffix,
  sectionsObject,
}) => {
  const numberOfNights = useNumberOfNights()

  const currencyAmount = (amount) => {
    return `${currencyPrefix ? currencyPrefix : ''}${amount}${
      currencySuffix ? ` ${currencySuffix}` : ''
    }`
  }

  const totalPrice = Object.values(sectionsObject).reduce(
    (acc, curr) => acc + curr,
    0
  )

  const nightlyPrice = () =>
    totalPrice / numberOfNights(dates.checkIn, dates.checkOut)

  const nightlyPriceString = () =>
    `(${currencyAmount(nightlyPrice())} per night)`

  const parsedSectionsObject = () => {
    let returnObj = {}

    Object.keys(sectionsObject).map(
      (key) => (returnObj[key] = currencyAmount(sectionsObject[key]))
    )
    returnObj['Total'] = `${currencyAmount(totalPrice)} ${nightlyPriceString()}`

    return returnObj
  }

  return (
    <>
      <TableItem heading="What I paid:" content={parsedSectionsObject()} />
    </>
  )
}

export default PriceBreakdown
