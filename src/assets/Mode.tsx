import { useState } from "react"
import { Heading } from "./Heading"
import { useContext } from "react";
import { UserContext } from "../App";
export const Mode=()=>{
  const context=useContext(UserContext)
     const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event:React.ChangeEvent) => {
    let checked=event.target as HTMLInputElement
    setIsChecked(checked.checked);   
  };
const check=document.getElementById('check') as HTMLInputElement

  if(check){
    if(check.checked){
context?.setModes('dark')
    }else{
      context?.setModes('light')
    }
  

    }

    return(
        <div className={`lg:w-1/5  border-2 sm:w-[20rem]  shadow-2xl rounded-lg fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] min-h-[30rem] ${context?.modes==='light'?'bg-white':'bg-[#121212] border-[#635fc7]'}`}>
                
              
    {context?.modes==='light'? <div className="lg:w-1/3 sm:w-[10rem] bg-yellow-300 h-[8rem] fixed lg:left-[50%] sm:left-[20%] sm:top-[5%] lg:top-[20%] lg:translate-x-[-50%] lg:translate-y-[-50%] rounded-[50%] shadow-moon"></div> :
                  
        <div className="w-1/3 sm:w-[10rem]  bg-[#635fc7] h-[8rem] fixed left-[50%] top-[18%] translate-x-[-50%] translate-y-[-50%] rounded-[50%] before:content-[''] before:absolute before:transition-width before:duration-2000 before:ease-in-out  before:bg-[#121212] before:w-[90%] before:h-[8rem] before:rounded-[50%] before:left-[30px] rotate-[-45deg]  "></div>
} 

                
                   <Heading message={`${context?.modes==='light' ?'An early-morning walk is a blessing for the whole day':'Let go of the stresses of the day and welcome the serenity of the night'} `} 
                   mode={`${context?.modes==='light' ?'Good Morning':'Good night'} `}/>
                   <div className="">
                      <input type="checkbox"  id="check" className="peer/check hidden" checked={isChecked} onChange={handleCheckboxChange}></input><br/>
                       <label htmlFor="check" className="bg-[#a1a1aa] peer-checked/check:bg-[#635fc7] peer-checked/check:before:bg-[#b3b1fa]  peer-checked/check:before:translate-x-[60px] duration-[0.8s] absolute w-[120px] ml-[-25%] h-[50px] cursor-pointer rounded-[100px] before:content-[''] before:absolute before:bg-yellow-300 before:w-[50px] before:h-[50px] before:rounded-[200px] before:left-[6px] ">

                   </label>
                
                   </div><br/>
    
<p className={`mt-[20%] text-end capitalize  text-[1rem] pr-[4%] pl-[5%] font-montserrat ${context?.modes==='dark' && 'text-[#e0e0e0]'}`}>{context?.modes} mode</p>


        </div>
    )
}