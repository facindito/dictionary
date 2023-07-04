import { AudioButton } from './AudioButton'
import { Meaning } from './Meaning'

export function Word ({ word, phonetic, meanings, sourceUrls, us }) {
  console.log({ phonetic, us })
  return (
    <main className='p-4 flex flex-col gap-6 mb-4'>
      <section>
        <div className='flex justify-between items-center mb-2'>
          <h2 className='font-bold text-5xl'>{word}</h2>
          {us?.audio && <AudioButton src={us.audio} />}
        </div>
        {
          (phonetic || us?.text) && (
            <span className='text-sky-500 font-semibold'>
              {phonetic || us.text}
            </span>
          )
        }
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
