import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HealthBar from './components/HealthBar/HealthBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HealthBar hpAmount={70} />
    </>
  )
}

export default App
