

import React,{useState} from 'react'


const SkyHigh = () => {
  const click= ()=>{
let newText = text.toUpperCase();
setText(newText);
  }
    const onchange= (e)=>{
       setText(e.target.value)
    }
    const [text,setText] = useState();

  return (
    <>
    <div className="mb-3">
    <textarea className="akash" id="vikash" value={text} onChange=
    {onchange} cols="50" rows="10"  ></textarea>
    </div>
    <button className="btn btn-primary" onClick={click}>convert to uppercase</button>
    {/* <div className="class container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.08*text.split(" ").length} Minutes Read</p>
    </div> */}
    </>

  )
}

export default SkyHigh