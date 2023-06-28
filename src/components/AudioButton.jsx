import { useRef, useState } from 'react'

export function AudioButton ({ src }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const handleClick = () => {
    setIsPlaying(!isPlaying)
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
  }
  const handleAudioEnd = () => {
    setIsPlaying(false)
    audioRef.current.pause()
  }
  return (
    <>
      <audio ref={audioRef} src={src} onEnded={handleAudioEnd} />
      <button onClick={handleClick} className='p-4 bg-sky-200 rounded-full'>
        {isPlaying
          ? (
            <svg className='text-sky-500 w-6 h-6' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 5.25v13.5m-7.5-13.5v13.5' />
            </svg>
            )
          : (
            <svg className='text-sky-500 w-6 h-6' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z' />
            </svg>
            )}
      </button>
    </>
  )
};
