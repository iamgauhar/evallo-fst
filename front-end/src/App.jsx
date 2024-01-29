import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Content from './Pages/Content'
import ContentList from './Pages/ContentList'
Link
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/add-content' element={<Content />} />
        <Route path='/content-list' element={<ContentList />} />
      </Routes>

    </>
  )
}

export default App
