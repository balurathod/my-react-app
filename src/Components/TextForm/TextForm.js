import React, { useState } from "react";

export default function TextForm(props) {

  const [text, setText] = useState("Enter Text here...");
  
  const handleUpperCaseClick = () => {
    //console.log('handleUpperCaseClick clicked' + text);
    let newText = text.toUpperCase();
    //setText("You have clicked on handleUpperCaseClick ");
    setText(newText);
  };

  const handleOnChange = (event) => {
    //console.log('handleOnChange clicked');
    setText(event.target.value);
  };

  return (
    <div>
      <div className="container my-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpperCaseClick}>
        Convert to UpperCase
      </button>
    </div>
  );
}
