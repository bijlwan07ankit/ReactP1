import React, {useState} from 'react'
export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked");
    setText("You have clicked on handled click"+text);
    let newtext=text.toUpperCase();
    setText(newtext);
  }

  const handleloClick=()=>{
    let lowercase=text.toLowerCase();
    setText(lowercase);
  }
  const handleOnChange=(event)=>{
    // console.log("Handle Change");
    setText(event.target.value)
  }
  const handleclear=()=>{
    let newText=("");
    setText(newText);
  }
  const [text, setText] = useState('');
  // text="newText"; //wrong way to change the state 
  //  setText("new text");   //correct way to  change the state 
  return (
    <div class="container">
<h1>{props.heading} </h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleclear}>Clear</button>

<div className="container my-3">
  <h2>Your Text Summary</h2>
  <p>{text.split(" ").length} words , and {text.length}charector</p>
  <p>{0.008 * text.split(" ").length} minutes Read</p>
<h2>preview</h2>
<p>{text}</p>
</div>
</div>
  )
}