import { useState } from 'react'

export function SearchForm ({ searchWord }) {
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    searchWord({ search })
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
          <svg aria-hidden='true' className='w-5 h-5 text-sky-500' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /></svg>
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
