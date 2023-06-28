import { Meaning } from './Meaning'

export function Word ({ word, phonetic, meanings, sourceUrls }) {
  return (
    <main className='max-w-2xl w-full mx-auto p-4 flex flex-col gap-6 mb-4'>
      <section>
        <div className='flex justify-between items-center mb-2'>
          <h2 className='font-bold text-5xl'>{word}</h2>
          <button className='p-4 bg-sky-200 rounded-full'>
            <svg className='text-sky-500 w-6 h-6' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z' />
            </svg>
          </button>
        </div>
        <span className='text-sky-500 font-semibold'>
          {phonetic}
        </span>
      </section>
      {
        meanings.map((meaning, index) => <Meaning key={meaning.partOfSpeech + index} {...meaning} />)
      }
      <section className='text-sm flex gap-2'>
        <span className='opacity-50 font-medium '>
          Source
        </span>
        <a
          href={sourceUrls}
          className='decoration-solid hover:text-sky-500 hover:underline flex items-center gap-1'
        >
          {sourceUrls}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-[14px] h-[14px]'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25' />
          </svg>
        </a>
      </section>
    </main>
  )
};
