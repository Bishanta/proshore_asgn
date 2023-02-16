import Repository from './pages/repository'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="" element={<Repository />}></Route>
      </Routes>
    </div>
  )
}

export default App
