import { useState } from 'react'
import { SearchIcon } from './Icons'

export function SearchForm ({ onSubmit }) {
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ search })
  }
  const handleChange = (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)
  }
  return (
    <form className='p-4 max-w-2xl w-full mx-auto ' onSubmit={handleSubmit}>
      <label htmlFor='default-search' className='mb-2 text-base font-medium text-gray-900 sr-only'>Search</label>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <SearchIcon />
        </div>
        <input
          type='search'
          id='default-search'
          className='block w-full p-4 pl-10 text-base text-gray-900 font-semibold border border-sky-300 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-sky-300'
          placeholder='keyboard, water, hello...'
          onChange={handleChange}
          value={search}
          required
        />
      </div>
    </form>
  )
};
