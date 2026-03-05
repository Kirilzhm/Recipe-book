import './App.css'

import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom';


// Ліниве завантаження 

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MenuItemsPage = lazy(() => import('../pages/MenuPage/MenuItemsPage'));

function App() {

  return (
    <>
      <Routes>
        <Route path="/MainPage" element={<HomePage />}/>
        <Route path="/MenuItemsPage" element={<MenuItemsPage/>}/>
      </Routes>
    </>
  )
}

export default App
