import { useCallback, useEffect, useState } from 'react'
import { getWord } from '../services/getWord'

export function useWord ({ query }) {
  const [word, setWord] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const searchWord = useCallback(async ({ search }) => {
    try {
      setLoading(true)
      setError(null)
      setWord('')
      const newWord = await getWord({ search })
      newWord.error
        ? setError(newWord.message)
        : setWord(newWord)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!query) return
    searchWord({ search: query })
  }, [query])

  return {
    word,
    loading,
    error
  }
};
