import { useState } from 'react'
import './App.css'
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'


function App() {
    const [token, setToken] = useState(null);
    console.log(token)

  return (
    <>
      <Authenticate token={token} setToken={setToken}/>
      <SignUpForm token={token} setToken={setToken}/>
    </>
  )
}

export default App
