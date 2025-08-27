import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HealthBar from './components/HealthBar/HealthBar'
import ChoicePrompts from './components/ChoicePrompts/ChoicePrompts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChoicePrompts />
    </>
  )
}

export default App
