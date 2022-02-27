import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Route, Routes, useNavigate } from "react-router-dom"
import './App.scss'
import { characterInfo } from './pages/characterInfo'
import { Header } from './components/Header'
import { Cards } from './components/Cards'


function App() {


  return (
    <Router>
      <Header />
       <Cards />
    </Router>

  )
}
export default App
