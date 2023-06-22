import { useCallback, useState } from 'react'

export function useWord () {
  const [word, setWord] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getWord = useCallback(({ search }) => {
    try {
      setLoading(true)
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
        .then(resp => {
          if (!resp.ok) {
            console.error(`This is an HTTP error: The status is ${resp.status}`)
          }
          return resp.json()
        })
        .then(data => {
          if (data.title) setError(data.message)
          setWord(data[0])
        })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    word,
    loading,
    error,
    getWord
  }
};
