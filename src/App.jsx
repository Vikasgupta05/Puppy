import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route , Routes } from 'react-router-dom'
import { Home } from './component/Home'
import { Search } from "./component/search"
import { Puppy } from './component/puppy'
import { Navbar } from './component/navbar'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/puppy" element={<Puppy/>}/>
      </Routes>
     
    </div>
  )
}

export default App
