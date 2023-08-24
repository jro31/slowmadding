let formattedDate

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
  })

  if (includeOrdinal) addOrdinal()

  return formattedDate
}

export const formatDateTime = (dateString, includeOrdinal = false) => {
  formattedDate = new Date(dateString).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    // timeZone: 'UTC',
    timeZoneName: 'long',
    hour: 'numeric',
    minute: 'numeric',
  })

  if (includeOrdinal) addOrdinal()

  return formattedDate
}

const dateIsToday = (dateString) =>
  formatDate(dateString) === formatDate(new Date())

export const formatDateRange = (
  startDateString,
  endDateString,
  includeOrdinals = true
) => {
  let formattedStartDate = formatDate(startDateString, includeOrdinals)
  const formattedEndDate = formatDate(endDateString, includeOrdinals)

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
