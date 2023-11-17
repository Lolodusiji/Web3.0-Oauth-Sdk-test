import React from 'react'
import Chain from "../../public/chain.png"
import "./SDK_Form.css"

const SDK_Form = () => {
  return (
    <div>
      <div className="container">
        <div className="left_side">
          <img src={Chain} alt="" />
        </div>
        <div className="right_side">
          <textarea id="myTextarea" placeholder="Prompt here..."/>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default SDK_Form