import { icons } from '../icons'
import Fuse from 'fuse.js'
import React from 'react'

const fuse = new Fuse(icons, {
  threshold: 0.4,
  keys: ['icons.name','icons.label']
})

function useSearch(query) {
  const [results, setResults] = React.useState(Object.values(icons))

  React.useEffect(
    () => {
      if (query.trim()) {
        setResults(fuse.search(query.trim()))
      } else {
        setResults(Object.values(icons))
      }
    },
    [query],
  )
  return results
}

export default useSearch
