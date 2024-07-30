interface HeadingProp{
    mode:string
    message:string
}
import { useContext } from "react"
import { UserContext } from "../App"

export const Heading=(props:HeadingProp)=>{
      const context=useContext(UserContext)
    return(
        <div>
            
            <h1 className={`mt-[50%] capitalize font-extrabold text-[1.5rem] text-start pl-[5%] font-montserrat ${context?.modes==='dark' && 'text-[#e0e0e0]'}`}>{props.mode} </h1>
            <p className={`py-[4%] px-[6%] font-montserrat text-left ${context?.modes==='dark' && 'text-[#e0e0e0]'}`}>{props.message}</p>
        </div>
    )
}