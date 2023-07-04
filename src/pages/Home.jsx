import { SearchForm } from '../components/SearchForm'

export default function Home () {
  return (
    <main className='p-4 flex-1 flex flex-col justify-center items-center w-full'>
      <div className='relative w-full'>
        <SearchForm className='absolute top-0 w-full' />
        <img src='/banner.svg' />
      </div>
    </main>
  )
};
