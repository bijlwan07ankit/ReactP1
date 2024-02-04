import React, {useState} from 'react'
export default function textForm(props) {
  const handleUpClick=()=>{
    console.log("Uppercase was clicked");
    setText("You have clicked on handled click")
  }

  const handleOnChange=()=>{
    console.log("Handle Change");
  }
  const [text, setText] = useState('Enter your Text');
  // text="newText"; //wrong way to change the state 
  //  setText("new text");   //correct way to  change the state 
  return (
    <div>
<h1>{props.heading}  </h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
</div>
  )
}