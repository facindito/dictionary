import { DarkIcon, LightIcon } from './Icons'

export function Header ({ darkMode, handleClick }) {
  return (
    <header className='max-w-2xl w-full mx-auto flex justify-between items-center p-4'>
      <h1 className='font-bold text-2xl'>Dictionary</h1>
      <button onClick={handleClick}>
        {
          darkMode ? <LightIcon /> : <DarkIcon />
        }
      </button>
    </header>
  )
}
