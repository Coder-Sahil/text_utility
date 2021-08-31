import React, {useState} from "react";

export default function TextForn(props) {

  const [text, setText] = useState("") 

  const handle_TextArea = (event) =>{
    setText(event.target.value);
    console.log("handle_TextArea");
  }
  
  const handle_UpperCase = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    //console.log("handle_UpperCase");
  }
  const handle_LowerCase = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    //console.log("handle_LowerCase");
  }
  const handle_ExtraSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));    
  }
  const handle_CopyText = () =>{
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);   
  }
  const handle_ClearText = () =>{
    setText("");
  }
  const handle_EncodeTextBase64 = () =>{
    let encodeText = window.btoa(text);
    setText(encodeText);    
  }
  const handle_DecodeTextBase64 = () =>{
    let originalText = text;
    try
    {
      let decodeText = window.atob(text);
      setText(decodeText);
    }
    catch(error)
    {
      setText(originalText);
      alert("Text Cannot Be Decoded Further ..")
    }
  }

  const handle_CamelCase = () =>{
    let tempText = text;
    let newText = tempText.replace(/\W+(.)/g, function(match, chr)
    {
         return " " + chr.toUpperCase();
     });
     setText(newText);
  }

  const handle_TitleCase = () =>{
    let tempText = text;
    let newText = tempText.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
     setText(newText);
  }

  return (
    <>
    <div className={`container text-${props.mode === "dark" ? "light" : "dark"}`}>
      <h1 className="text-center">Enter The Text Below</h1>
        <div className="mb-3">         
         <textarea className="form-control" value={text} onChange={handle_TextArea} placeholder="Enter Text Here" id="myBox" rows="8">
           {/* {text} */}
         </textarea>
        </div>   
        <button className="btn btn-outline-primary mx-2 my-2" onClick={handle_UpperCase}>Convert To UpperCase</button>  
        <button className="btn btn-outline-primary mx-2 my-2" onClick={handle_LowerCase}>Convert To LowerCase</button>  
        <button className="btn btn-outline-primary mx-2 my-2" onClick={handle_CamelCase}>Convert To CamelCase</button>          
        <button className="btn btn-outline-primary mx-2 my-2" onClick={handle_TitleCase}>Convert To TitleCase</button>  
        <button className="btn btn-outline-primary mx-2 my-2" onClick={handle_ExtraSpace}>Remove Extra Spaces</button>  
        <button className="btn btn-outline-primary mx-2 my-2" onClick={handle_CopyText}>Copy Text</button>  
        <button className="btn btn-outline-primary mx-2 my-2" onClick={handle_ClearText}>Clear Text</button>  
        <button className="btn btn-outline-primary mx-2 my-2" onClick={handle_EncodeTextBase64}>Encode Text Base64</button>  
        <button className="btn btn-outline-primary mx-2 my-2" onClick={handle_DecodeTextBase64}>Decode Text Base64</button>          
                
        </div>

        <div className={`container text-${props.mode === "dark" ? "light" : "dark"} my-3`}>
          <h2>Your Text Summary</h2>
          <p>{text === "" ? 0 : text.split(" ").length} Words and {text.length} characters</p>
          <p>{text === "" ? 0 : 0.008 * text.split(" ").length} Minutes To Read</p>            
          <p>Text Preview</p>
          <p>{text === "" ? "Write Something To Preview" : text}</p>
        </div>
    </>
  );
}

