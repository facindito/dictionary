import { AudioButton } from './AudioButton'
import { SorceIcon } from './Icons'
import { Meaning } from './Meaning'

export function Word ({ word, phonetic, meanings, sourceUrls, us }) {
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
          <SorceIcon />
        </a>
      </section>
    </main>
  )
};
