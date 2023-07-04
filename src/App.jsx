import { Header } from './components/Header'
import { Outlet } from 'react-router-dom'

export function App () {
  return (
    <div className='flex flex-col h-screen max-w-2xl mx-auto'>
      <Header />
      <Outlet />
    </div>
  )
}
