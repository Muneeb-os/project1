import React, { useState } from "react";

export default function About(){
  const [btntext,setBtnText]=useState('Enable Light Mood')
  const[mystyle,setmystyle]= useState({
    color:'Grey',
    backgroundColor:'white',

})
const enableMoods=()=>{
    if(mystyle.color==='white'){
      setmystyle({
        color:'Grey',
        backgroundColor:'white'
      })
      setBtnText('Enable Dark mood')
    }
    else{
      setmystyle({
        color:'white',
        backgroundColor:'black'
      })
      setBtnText('Enable Light mood')
    }
}
    return(
      
      <div className="container" style={mystyle}>
        <h3  style={mystyle}>About</h3>
       <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item"  style={mystyle}>
    <h2 class="accordion-header">
      <button class="accordion-button collapsed"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item"  style={mystyle}>
    <h2 class="accordion-header">
      <button  style={mystyle} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item"  style={mystyle}>
    <h2 class="accordion-header">
      <button  style={mystyle} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
<div className="container">
<button  style={mystyle} onClick={enableMoods}>{btntext}</button>
</div>
<p>Item Two</p>
<p>Item Three</p>
<p>Item Four</p>
<p>Item Five</p>
<p>Item Six</p>
<p>Item Seven</p>
<p>Item Eight</p>
</div>
    )
}