import { useSearchParams } from 'react-router-dom'
import { Word } from '../components/Word'
import { useWord } from '../hooks/useWord'
import { SearchForm } from '../components/SearchForm'

export default function SearchResult () {
  const [searchParams] = useSearchParams()
  const { word, loading, error } = useWord({ query: searchParams.get('q') })

  return (
    <>
      <SearchForm />
      {error && <section className=' m-4 p-4 text-red-500 bg-red-200 border border-red-500 rounded-md'>{error}</section>}
      {loading && <section className='p-4 text-sky-500'>Loading...</section>}
      {word && <Word {...word} />}
    </>
  )
};
