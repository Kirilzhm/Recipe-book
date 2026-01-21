import './App.css'

import { lazy } from 'react'


// Ліниве завантаження 

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

function App() {

  return (
    <>
      <HomePage />
    </>
  )
}

export default App
