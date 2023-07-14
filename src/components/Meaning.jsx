import { Link } from 'react-router-dom'

export function Meaning ({ partOfSpeech, definitions, synonyms, antonyms }) {
  return (
    <section>
      <div className='flex gap-4 items-center mb-4'>
        <span className='font-bold italic w-fit whitespace-nowrap'>{partOfSpeech}</span>
        <div className='w-full h-px bg-slate-300' />
      </div>
      <div>
        <span className='opacity-50 font-medium'>Meaning</span>
        <ul className='pl-8 text-base mt-4'>
          {
            definitions?.map(({ definition, example }, index) => (
              <li key={index} className='list-disc text-sky-500 mb-2'>
                <p className='text-black dark:text-white'>{definition}</p>
                {example && <p className='text-black dark:text-white opacity-50'>{example}</p>}
              </li>
            ))
          }
        </ul>
      </div>
      {
        synonyms.length > 0 && (
          <div className='flex items-baseline gap-4 mt-4'>
            <span className='opacity-50 font-medium'>Synonyms</span>
            <div className='font-bold text-sky-500 text-base flex flex-wrap gap-2'>
              {
                synonyms?.map((synonym, index) => (
                  <Link
                    key={synonym + index}
                    to={`/search?q=${synonym}`}
                    className='decoration-solid hover:underline hover:underline-offset-4'
                  >
                    {synonym}
                  </Link>
                ))
              }
            </div>
          </div>
        )
      }
      {
        antonyms.length > 0 && (
          <div className='flex items-baseline gap-4 mt-4'>
            <span className='opacity-50 font-medium'>Antonyms</span>
            <div className='font-bold text-sky-500 text-base flex flex-wrap gap-2'>
              {
                antonyms?.map((antonyms, index) => (
                  <Link
                    key={antonyms + index}
                    to={`/search?q=${antonyms}`}
                    className='decoration-solid hover:underline hover:underline-offset-4'
                  >
                    {antonyms}
                  </Link>
                ))
              }
            </div>
          </div>
        )
      }
    </section>
  )
};
