const suffixes = ['st', 'nd', 'rd', 'th']

let formattedDate

const addOrdinal = () => {
  const dayAsString = formattedDate.split(' ')[0]
  const dayAsNumber = parseInt(dayAsString)
  const dayOrdinalDigit = dayAsNumber.toString().slice(-1)
  const suffix = suffixes[dayOrdinalDigit >= 4 ? 3 : dayOrdinalDigit - 1]
  const suffixedDay = `${dayAsNumber}${suffix}`

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

export const formatDateRange = (
  startDateString,
  endDateString,
  includeOrdinals = true
) => {
  let formattedStartDate = formatDate(startDateString, includeOrdinals)
  const formattedEndDate = formatDate(endDateString, includeOrdinals)

  if (
    formattedStartDate.split(' ').slice(-1)[0] ===
    formattedEndDate.split(' ').slice(-1)[0]
  ) {
    formattedStartDate = formattedStartDate.split(' ').slice(0, -1).join(' ')

    if (formattedStartDate.split(' ')[1] === formattedEndDate.split(' ')[1]) {
      formattedStartDate = formattedStartDate.split(' ').slice(0, -1).join(' ')
    }
  }

  return `${formattedStartDate} to ${formattedEndDate}`
}
