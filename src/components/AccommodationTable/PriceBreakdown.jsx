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

  const tableRowString = (item, value, bold = false) => {
    return `
      <tr class='[&>td]:first:pt-0 border-b-0 [&:nth-last-child(2)]:border-b-2 [&>td]:py-0.5 [&>td]:[&:nth-last-child(2)]:pb-2 [&>td]:last:py-2 ${
        bold ? 'font-black' : ''
      }'>
        <td>${item}</td>
        <td>${value}</td>
      </tr>
    `
  }

  const tableHtml = () => {
    return `
      <table>
        ${Object.keys(sectionsObject)
          .map((key) =>
            tableRowString(key, currencyAmount(sectionsObject[key]))
          )
          .join('')}
        ${tableRowString(
          'Total',
          `
            <div>${currencyAmount(totalPrice)}</div>
            <div class='font-normal'>${nightlyPriceString()}</div>
          `,
          true
        )}
      </table>
    `
  }

  return <TableItem heading="What I paid" content={tableHtml()} />
}

export default PriceBreakdown
