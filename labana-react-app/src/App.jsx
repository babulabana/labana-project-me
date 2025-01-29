import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdminLogin from './components/admin/AdminLogin'
import {Route,Routes,Link} from 'react-router-dom'
import Adminhome from './components/admin/Adminhome'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Link to="/adminlogin">Admin Login</Link>
      <Routes>
        <Route path="/adminlogin" element={<AdminLogin></AdminLogin>}></Route>
        
        <Route path="/adminhome" element={<Adminhome></Adminhome>}></Route>
      </Routes> 
    </div>
    </>
  )
}

export default App
