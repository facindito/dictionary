import { useState } from 'react'
import { Header } from './components/Header'
import { Outlet } from 'react-router-dom'

export function App () {
  const [darkMode, setDarkMode] = useState(window.localStorage.getItem('theme-mode') || true)

  const handleMode = () => {
    const newTheme = !darkMode
    setDarkMode(newTheme)
    window.localStorage.setItem('theme-mode', newTheme)
  }
  return (
    <div className={`${darkMode ? 'dark' : ''} `}>
      <div className='dark:bg-gray-900 dark:text-white transition-colors duration-200 ease-in-out'>
        <div className='flex flex-col min-h-screen max-w-2xl mx-auto'>
          <Header darkMode={darkMode} handleClick={handleMode} />
          <Outlet />
        </div>
      </div>
    </div>
  )
}
