const useNumberOfNights = () => {
  const numberOfNights = (startDateString, endDateString) =>
    (new Date(endDateString) - new Date(startDateString)) /
    (1000 * 60 * 60 * 24)

  return numberOfNights
}

export default useNumberOfNights
