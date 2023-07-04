import React ,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Textform(props) {
 const [text,setText]=useState("input some value");
     
 const handleUpClick=()=>{
 let values= document.getElementById('tarea').value;
 let result = values.toUpperCase();
 setText(result);

}
const lowerCase=()=>{
  let values= document.getElementById('tarea').value;
  let result = values.toLowerCase();
  setText(result);
 
 }

 const handleOnChange=(event)=>{
console.log("onChange not onchange");
setText(event.target.value);
}

const handleCopy=()=>{


console.log("i am copy")
 
var text=document.getElementById("tarea");
text.select();
  navigator.clipboard.writeText(text.value);
}
const handleExtraSpaces=()=>{
var newText=text.split(/[ ] +/);
setText(newText.join(" "));

}




 // text="value"   wrong way to set the value of text 
     return (<>
      <div className="container">
<div className="mb-3 " >
<h1>{props.heading}</h1>
<textarea className="form-control my-2" id="tarea" rows="3" value={text}  onChange={handleOnChange}></textarea>
<button type="submit" className="btn btn-primary" onClick={handleUpClick} >convert to uppercase</button>
<button type="submit" className="btn btn-primary" onClick={lowerCase} >convert to lowercase</button>
<button type="submit" className="btn btn-primary" onClick={handleCopy} >Coppy Clip-bord</button>
<button type="submit" className="btn btn-primary" onClick={handleExtraSpaces} >remove Extra space</button>
</div>
{/* <div className="value">{uppercase}
</div> */}
</div>

<div className="container ">
<h2>Summarry of word </h2>
<p>{text.split(" ").length} words and  {text.length} characters</p>




</div>
</>

  )
}
