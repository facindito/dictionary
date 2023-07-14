import { createBrowserRouter } from 'react-router-dom'
import SearchResult from '../pages/SearchResult'
import Home from '../pages/Home'
import { App } from '../App'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />

      },
      {
        path: '/search',
        element: <SearchResult />
      }
    ]
  }
])
