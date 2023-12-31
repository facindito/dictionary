import { useEffect, useState } from 'react'
import { SearchIcon } from './Icons'
import { useNavigate, useSearchParams } from 'react-router-dom'

export function SearchForm (props) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/search')
    setSearchParams({ q: query })
  }
  const handleChange = (e) => {
    const newQuery = e.target.value
    setQuery(newQuery)
  }
  useEffect(() => {
    setQuery(searchParams.get('q'))
  }, [searchParams])

  return (
    <form className='p-4 ' onSubmit={handleSubmit} {...props}>
      <label htmlFor='default-search' className='mb-2 text-base font-medium text-gray-900 sr-only'>Search</label>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <SearchIcon className='w-5 h-5 dark:text-gray-500' />
        </div>
        <input
          id='default-search'
          type='text'
          className='block w-full p-4 pl-10 text-base text-gray-900 font-semibold border border-sky-300 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-sky-300 dark:bg-gray-700 dark:text-white'
          placeholder='keyboard, water, hello...'
          onChange={handleChange}
          value={query}
          required
        />
        <button type='submit' className='text-white absolute right-2.5 bottom-2.5 bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800'>Search</button>
      </div>
    </form>
  )
};
