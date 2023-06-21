import dictionary from './mocks/dictionary.json'
export function App () {
  const [word] = dictionary
  return (
    <>
      <header className='max-w-2xl w-full mx-auto flex justify-between items-center p-4'>
        <h1 className='font-bold text-2xl'>Dictionary</h1>
        <label class='relative inline-flex cursor-pointer'>
          <input type='checkbox' value='' class='sr-only peer' />
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-600" />
        </label>
      </header>

      <form className='p-4 max-w-2xl w-full mx-auto'>
        <label for='default-search' className='mb-2 text-sm font-medium text-gray-900 sr-only'>Search</label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <svg aria-hidden='true' className='w-5 h-5 text-sky-500' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /></svg>
          </div>
          <input
            type='search'
            id='default-search'
            className='block w-full p-4 pl-10 text-sm text-gray-900 font-semibold border border-sky-300 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-sky-300'
            placeholder='keyboard, water, hello...'
            required
          />
        </div>
      </form>
      <main className='max-w-2xl w-full mx-auto p-4 flex flex-col gap-6 mb-4'>
        <section>
          <div className='flex justify-between items-center mb-2'>
            <h2 className='font-bold text-5xl'>{word.word}</h2>
            <button className='p-4 bg-sky-200 rounded-full'>
              <svg className='text-sky-500 w-6 h-6' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'>
                <path stroke-linecap='round' stroke-linejoin='round' d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z' />
              </svg>
            </button>
          </div>
          <span className='text-sky-500 font-semibold'>
            {word.phonetic}
          </span>
        </section>
        {
            word?.meanings.map(meaning => {
              const { partOfSpeech, definitions, synonyms } = meaning
              return (
                <section key={partOfSpeech}>
                  <div className='flex gap-4 items-center mb-4'>
                    <span className='font-bold italic w-fit'>{partOfSpeech}</span>
                    <div className='w-full h-px bg-slate-300' />
                  </div>
                  <div>
                    <span className='opacity-50 font-medium'>Meaning</span>
                    <ul className='pl-8 text-sm mt-4'>
                      {
                        definitions.map(({ definition, example }, index) => (
                          <li key={index} className='list-disc text-sky-500 mb-2'>
                            <p className='text-black'>{definition}</p>
                            {example && (
                              <p className='text-black opacity-50'>{example}</p>
                            )}
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  {
                    synonyms.length > 0 && (
                      <div className='flex items-baseline gap-4 mt-4'>
                        <span className='opacity-50 font-medium'>Synonyms</span>
                        <div className='font-bold text-sky-500 text-sm flex flex-wrap gap-2'>
                          {
                        synonyms?.map((synonym) => (
                          <span key={synonym}>
                            {synonym}
                          </span>
                        ))
                      }
                        </div>
                      </div>
                    )
                  }
                </section>
              )
            })
          }
        <section className='text-sm flex gap-2'>
          <span className='opacity-50 font-medium '>
            Source
          </span>
          <a
            href={word.sourceUrls}
            className='decoration-solid hover:text-sky-500 hover:underline flex items-center gap-1'
          >
            {word.sourceUrls}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-[14px] h-[14px]'
            >
              <path stroke-linecap='round' stroke-linejoin='round' d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25' />
            </svg>
          </a>
        </section>
      </main>
    </>
  )
}
