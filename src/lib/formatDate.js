let formattedDate

export const beginningOfToday = Date.parse(new Date().toJSON().slice(0, 10))

const suffix = (day) => {
  const suffixes = ['st', 'nd', 'rd', 'th']

  if (day.length > 1 && day.slice(0, 1) == 1) return suffixes[3]

  return suffixes[
    day.slice(-1) >= 4 || day.slice(-1) == 0 ? 3 : day.slice(-1) - 1
  ]
}

const addOrdinal = () => {
  const dayAsString = formattedDate.split(' ')[0]
  const suffixedDay = `${dayAsString}${suffix(dayAsString)}`

  formattedDate = formattedDate.replace(dayAsString, suffixedDay)
}

export const formatDate = (
  dateString,
  includeOrdinal = false,
  timezone = null
) => {
  formattedDate = new Date(dateString).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    ...(timezone && { timezone: timezone }),
  })

  if (includeOrdinal) addOrdinal()

  return formattedDate
}

const dateIsToday = (dateString) =>
  formatDate(dateString) === formatDate(new Date())

export const formatDateRange = (
  startDateString,
  endDateString,
  includeOrdinals = true,
  timezone = null
) => {
  let formattedStartDate = formatDate(
    startDateString,
    includeOrdinals,
    timezone
  )
  const formattedEndDate = formatDate(endDateString, includeOrdinals, timezone)

  if (
    !dateIsToday(endDateString) &&
    formattedStartDate.split(' ').slice(-1)[0] ===
      formattedEndDate.split(' ').slice(-1)[0]
  ) {
    formattedStartDate = formattedStartDate.split(' ').slice(0, -1).join(' ')

    if (formattedStartDate.split(' ')[1] === formattedEndDate.split(' ')[1]) {
      formattedStartDate = formattedStartDate.split(' ').slice(0, -1).join(' ')
    }
  }

  return `${formattedStartDate} to ${
    dateIsToday(endDateString) ? 'now' : formattedEndDate
  }`
}
