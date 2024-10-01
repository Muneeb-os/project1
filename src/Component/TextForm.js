import React,{useState} from "react";

export default function TextForm(props){
    const [text , setText]=useState('')
    const onClickUp=()=>{
                let newText= text.toUpperCase();
                setText(newText);
                props.showAlert("Text Converted Uppercase","Succes")
    }
    const handleOnChange=(event)=>{
       console.log("OnChange Event in Active")
       setText(event.target.value)
    }
    const onClicklower=()=>{
        let lowertext=text.toLowerCase();
        setText(lowertext);
        props.showAlert("Text Converted Lowercase","Succes")
    }
    const onClickRemove=()=>{
        let cleartext='';
        setText(cleartext);
        props.showAlert("Text Removed","Succes")
    }
    const toAlternateCase = (str) => {
        return str
          .split("")
          .map((char, index) =>
            index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
          )
          .join("");
      }
    
      const onClickAlter = () => {
        let alternateCaseText =toAlternateCase(text);
        setText(alternateCaseText)
        props.showAlert("Text Converted In Alternate Form","Succes")
      }
      const capitalizeWords = (str) => {
        return str
          .split(" ") 
          .map((word) => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" "); 
      };
    
      const handleCapitalize = () => {
        const capitalizedText = capitalizeWords(text);
        setText(capitalizedText);
        props.showAlert("Text Converted In Captilized Form","Succes")
      };

 return (
    <>
    <div className="main-container" style={props.mood}>
    <div className="container"  style={props.mood}>
    <h2  style={props.mood}>{props.heading}</h2>
    <textarea className="Form-control" rows="10" cols="150" value={text} onChange={handleOnChange}  style={props.mood}></textarea>
    <button className="btn-primery" onClick={onClickUp}  style={props.mood}>Convert To UpperCase</button>
    <button className="btn-btn-primery" onClick={onClicklower}  style={props.mood}>Convert To LowerCase</button>
    <button className="btn-btn-primery" onClick={onClickRemove}  style={props.mood}>Remove Text</button>
    <button className="btn-btn-primery" onClick={onClickAlter}  style={props.mood}>Alternate Text</button>
    <button className="btn-btn-primery" onClick={handleCapitalize}  style={props.mood}>Convert Text Captilize word</button>

        <h3  style={props.mood}>YOUR TEXT SUMMERY</h3>
        <p><span>{text.split(" ").length}</span> Words & <span>{text.length}</span> Characters!!</p>
        <p>This Text Can Read in <span>{0.008*text.split(" ").length}</span> Mints.</p>
        <h3  style={props.mood}>Preview</h3>
        <p>{text.length>0? text:"Enter Something In Textbox Above To Preview It Here !!"}</p>
    </div>
    </div>
    </>
 )
}