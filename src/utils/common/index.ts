const parseDate = (date: string): string => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const dateObj = new Date(date)

  return `${getFormattedDay(dateObj.getDate())} ${monthNames[dateObj.getMonth()]}, ${dateObj.getFullYear()}`
}

const getFormattedDay = (day: number): string => {
  switch (day) {
    case 1:
      return '1st'
    case 2:
      return '2nd'
    case 3:
      return '3rd'
    default:
      return `${day}th`
  }
}

export { parseDate }
