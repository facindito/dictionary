import { useRef, useState } from 'react'
import { PauseIcon, PlayIcon } from './Icons'

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
        {
          isPlaying
            ? <PauseIcon className='text-sky-500 w-6 h-6' />
            : <PlayIcon className='text-sky-500 w-6 h-6' />
        }
      </button>
    </>
  )
};
