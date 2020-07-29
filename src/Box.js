import React, {useState} from "react"

function Box(props){
  const [visible,changeVisible]=useState(true)
  const handleClick=(e)=>{
    changeVisible(false)
    setTimeout(()=>changeVisible(true),100)
  }
  const startGame=()=>{
  console.log("hi")
  if(props.number===props.selectedNumer){
    handleClick()
  }
 }
  return(
  <div onKeyPress={startGame} onClick={handleClick} type="button" id={props.id} className={visible?'fadeIn '+props.className :'fadeOut '+props.className }>
  </div>
)

}
export default Box
