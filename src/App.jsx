import Repository from './pages/repository'
import RepositoryDetail from './pages/repository-detail'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="" element={<Repository />}></Route>
        <Route exact path="/repo/:owner/:repo" element={<RepositoryDetail />}></Route>
      </Routes>
    </div>
  )
}

export default App
