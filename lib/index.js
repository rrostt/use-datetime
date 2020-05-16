import { useState, useEffect } from 'react'
import moment from 'moment'

const useDatetime = ({ format = 'YYYY-MM-DD', updateInterval = 1000 * 60 }) => {
  const getDatetime = () => {
    return moment().format(format)
  }

  const [date, setDate] = useState(getDatetime())

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(getDatetime())
    }, updateInterval)

    return () => clearInterval(interval)
  })

  return date
}

export default useDatetime
