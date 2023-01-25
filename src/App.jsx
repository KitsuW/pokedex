import { useState } from 'react'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import List from './components/List'
import PokemonDetail from './components/PokemonDetail'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<List/>}/>
          <Route path='/pokedex/:name' element={<PokemonDetail/>}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
