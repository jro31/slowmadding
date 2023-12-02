let formattedDate

// '2023-11-01'
const parsedDateAsString = (parsedDate) =>
  new Date(parsedDate).toISOString().split('T')[0]

// 2023-11-01T17:58:49.084Z
const usersDateTime = (UTCDatetime = new Date()) =>
  new Date(
    new Date(UTCDatetime).getTime() + -new Date().getTimezoneOffset() * 60000
  )

export const usersDate = parsedDateAsString(usersDateTime())

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

export const formatDate = (dateString, includeOrdinal = false) => {
  formattedDate = new Date(dateString).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })

  if (includeOrdinal) addOrdinal()

  return formattedDate
}

const formattedDateYear = (formattedDate) =>
  formattedDate.split(' ').slice(-1)[0]

const dateStringIsToday = (dateString) =>
  new Date(usersDate).getTime() === new Date(dateString).getTime()

export const formatDateRange = (
  startDateString,
  endDateString,
  includeOrdinals = true
) => {
  let formattedStartDate = formatDate(startDateString, includeOrdinals)
  const formattedEndDate = formatDate(endDateString, includeOrdinals)

  if (
    !dateStringIsToday(endDateString) &&
    formattedDateYear(formattedStartDate) ===
      formattedDateYear(formattedEndDate)
  ) {
    formattedStartDate = formattedStartDate.split(' ').slice(0, -1).join(' ')

    if (formattedStartDate.split(' ')[1] === formattedEndDate.split(' ')[1]) {
      formattedStartDate = formattedStartDate.split(' ').slice(0, -1).join(' ')
    }
  }

  return `${formattedStartDate} to ${
    dateStringIsToday(endDateString) ? 'now' : formattedEndDate
  }`
}
