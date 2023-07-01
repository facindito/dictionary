import { useParams } from 'react-router-dom'
import { Word } from '../components/Word'
import { useWord } from '../hooks/useWord'
import { SearchForm } from '../components/SearchForm'

export default function SearchResult () {
  const { searchWord } = useParams()
  const { word, loading, error } = useWord({ query: searchWord })

  return (
    <>
      <SearchForm />
      {error && <section className='max-w-2xl w-full mx-auto px-4 text-red-500'>{error}</section>}
      {loading && <section className='max-w-2xl w-full mx-auto px-4 text-sky-500'>Loading...</section>}
      {word && <Word {...word} />}
    </>
  )
};
