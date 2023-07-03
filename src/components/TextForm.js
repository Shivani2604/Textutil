import React,{ useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
   
    setText(newText)
  }

  const handleLoClick = ()=>{
    console.log("Lowercase was clicked"+ text);
    let newText = text.toLowerCase();
   
    setText(newText)
  }
  const handleClearClick = ()=>{

    let newText = '';
   
    setText(newText)
  }

  const handleExtraSpace = ()=>{

    let newText = text.split(/[ ]+/);
   setText(newText.join(" "))
    
  }
  const handleOnChange = (event)=>{
    console.log("on change");
    setText(event.target.value);
  }
   const handleCopy =() =>{
    console.log("i am copy");
    var text = document.getElementById("MYbox");
    text.select();
    // text.setSlectionRange(0,999999);
    navigator.clipboard.writeText(text.value);
   }
  
  const [text, setText] = useState('');
  return (
    <>
    <div className ="container">
   <h1> Enter The Text to analyaze </h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange}id="MYbox" rows="8" ></textarea>
</div>
<button type="button" class="btn btn-success"onClick={handleUpClick}>convert to upercase</button>
{/* <button className="btn btn-primary mx-2"onClick={handleUpClick}> convert to upercase</button> */}
<button className="btn btn-primary mx-2"onClick={handleLoClick}> convert to lowercase</button>
<button type="button" class="btn btn-secondary mx-2"onClick={handleClearClick}> Clear Text</button>
<button type="button" class="btn btn-warning mx-2" onClick={handleExtraSpace}>Remove Extra Space</button >
<button type="button" class="btn btn-info mx-2" onClick={handleCopy}>copy text</button>   
    </div>
    <div className="container my-2">
    <h2> Text summary</h2>
    <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} 
     words and {text.length} characters</p>
    <p>{0.008*text.split( " ").length }Minutes read</p>
    <h2> preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
