const formatDateTime = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
    timeZoneName: 'short',
    hour: 'numeric',
    minute: 'numeric',
  })
}

export default formatDateTime
