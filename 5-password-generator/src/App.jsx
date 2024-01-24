import { useState , useCallback , useEffect} from 'react'
import './App.css'

//{ setNumbersAllowed ((prev) => !prev)} : line 18 : this function indicate the opp of the previous choice
function App() {
  const [ length , setLength ] = useState(8)
  const [ numberAllowed , setNumbersAllowed ] = useState(false)
  const [ symbolAllowed , setSymbolAllowed ] = useState(false)
  const [ password , setPassword] = useState('')
  
  const generatePassword = useCallback (() => {
    let pass =""
    let str = "ABCDEFGHIKLMNOPQRSTVXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(symbolAllowed) str += "!@#$%^&*()_+"

    for (let index = 0; index < length ; index++) {
          pass += str.charAt(Math.floor(Math.random() * str.length))
    }
    setPassword(pass)
  } , [length,numberAllowed,symbolAllowed])

  //useEffect => allow you to run a piece of code based on variety of senarios 
  useEffect(() => {
    generatePassword()
    //when some of the elements in the array below change the generatePassword will be recalled
  } , [length,numberAllowed,symbolAllowed])


  const copypassword = ()=> {
    //copying the password to clipboard
    window.navigator.clipboard.writeText(password)
    alert("Password coppied to clipboard")
  }
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-white bg-gray-800'>

      <h1 className='text-center my-3 text-white pb-2'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 text-black' placeholder='password' readOnly/>
          <button className='outiline-none bg-black text-white px-3 py-0.5 shrink-0' onClick={copypassword}>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={48} value={length} className='curser-pointer' onChange={(e) => setLength(e.target.value)} name="" id="" />
            <label htmlFor='length'>length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>       
          <input type="checkbox" name="" id="" onClick={() => { setNumbersAllowed ((prev) => !prev)}} defaultChecked = {numberAllowed} />
          <label htmlFor='number'>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>       
          <input type="checkbox" name="" id="" onClick={() => { setSymbolAllowed ((prev) => !prev)}} defaultChecked = {symbolAllowed}/>
          <label htmlFor='symbol'>Symbols</label>
        </div>

      </div>
    </div>
  )
}

export default App
