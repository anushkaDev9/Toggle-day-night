
import './App.css'
import { Mode } from './assets/Mode'
import { createContext, useState } from 'react'
interface ContextProps{
  modes:string
  setModes: React.Dispatch<React.SetStateAction<string>>;
}

 export let  UserContext=createContext<ContextProps|null>(null)
 function App() {
 const[modes,setModes]=useState('light')

  return (
    <div className={`w-full absolute top-0 left-0 h-[100vh] ${modes==='light'?'bg-white':'bg-[#121212]'}`}>
      <UserContext.Provider value={{ modes,setModes }}>
             <Mode/>
      </UserContext.Provider>
     
    </div>
  )
}

export default App
