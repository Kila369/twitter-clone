import { useState } from 'react'
import Button from './components/shared/Button'
import { useNavigate } from 'react-router-dom'
import RoutesEnum from './constants/RoutesEnum';

function App() {
  const [appTitle] = useState("Twitter clone")
  const navigate = useNavigate();

  return (
    <div>
        <h1 className='text-blue-400 text-center font-bold text-7xl py-20'>{appTitle}</h1>
        <div className='flex justify-center'>
          <Button onClick={() => navigate(RoutesEnum.FEED)}>Take a look at your feed</Button>
        </div>
    </div>
  )
}

export default App
