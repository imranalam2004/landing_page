import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectPage from './comp/projectPage'
import WhyDoProjects from './comp/nav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <ProjectPage/>
        <WhyDoProjects/>

    </>
  )
}

export default App
