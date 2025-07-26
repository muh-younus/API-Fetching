import { useState } from 'react'
import Axios from './Axios-fetching/Axios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Axios/>
    </>
  )
}

export default App
