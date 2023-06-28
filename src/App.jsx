import { useWord } from './hooks/useWord'
import { Header } from './components/Header'
import { SearchForm } from './components/SearchForm'
import { Word } from './components/Word'

export function App () {
  const { word, loading, error, searchWord } = useWord()

  return (
    <>
      <Header />
      <SearchForm onSubmit={searchWord} />
      {error && <section className='max-w-2xl w-full mx-auto px-4 text-red-500'>{error}</section>}
      {loading && <section className='max-w-2xl w-full mx-auto px-4 text-sky-500'>Loading...</section>}
      {word && <Word {...word} />}
    </>
  )
}
