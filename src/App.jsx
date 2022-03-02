import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.scss'
import { CharacterInfo } from './pages/CharacterInfo/CharacterInfo'
import { Home } from './components/Home'
import { Error } from './pages/ErrorPage/Error'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/character/:id' element={<CharacterInfo />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}
export default App
