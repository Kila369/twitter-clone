import { useState } from 'react'

function App() {
  const [appTitle] = useState("Twitter clone")

  return (
    <div>
        <h1 className='text-blue-400 text-center font-bold text-7xl py-20'>{appTitle}</h1>
    </div>
  )
}

export default App
