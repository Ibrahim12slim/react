import { useState } from 'react'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl p-3 bg-green-500 rounded-md text-black'>Company Employees</h1>
      <Card  username = "Ibrahim Slim" post='Full Stack Web Developer' 
          text='Develop both client and server software.' ImageSrc='whatsappProfile.jpg' />
      <hr></hr>
      <Card username='Jhon Toyota' post='React Developer' text='Create JavaScript-based applications for web or mobile environments. '/>
    </>
  )
}

export default App