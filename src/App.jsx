import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import './App.scss'
import { api } from './services/api'

function App() {

  const [char, setChar] = useState([])

  useEffect(async () => {
    const response = await api.get("character")

    setChar(response.data.results.slice(0, 5))
  }, []
  )

  return (
    <>

      <div className='header'>
        <img src="../assets/img/Rick_and_Morty_logo.svg" />
      </div>
      <Router>
        <div className='cards'>


          {char.map(resp => {
            return (
              <div className='card'>
                <img src={resp.image} className='avatar' key={resp.id} />
                <div className='card-name'>
                  {resp.name }
                </div>
              </div>
            )
          })}
        </div>

      </Router>
    </>
  )
}

export default App
