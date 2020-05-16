# useDatetime

A React hook for data and time string representations of present moment.

```js

import useDatetime from 'use-datetime'

const Component = () => {
}

export default () => {
  const date = useDatetime({ format: 'YYYY-MM-DD' })
  const weekday = useDatetime({ format: 'dddd' })
  return <div>{date} {weekday}</div>
}


```
