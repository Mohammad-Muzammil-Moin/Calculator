import React from 'react'
import './Button.css'

const Button = ({content ,onButtonPress,type})=>{
    return <div  onClick={onButtonPress(content)} className={` Button  ${content ===  "0" ? "zero": "" }${ type || "" }`} >
        {content}
        {/*  */}
    </div>
}
export default Button;