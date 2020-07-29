import React, {useState} from "react"
export var target="0"
function Box(props){
  const [visible,changeVisible]=useState(true)
  const handleClick=(e)=>{
    changeVisible(false)
    setTimeout(()=>changeVisible(true),100)
  }
  return(
  <div onClick={handleClick} type="button" id={props.id} className={visible?'fadeIn '+props.className :'fadeOut '+props.className }>
  </div>
)

}
export default Box
