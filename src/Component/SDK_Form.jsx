import React, {useState} from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import Chain from "../../public/chain.png";
import "./SDK_Form.css";
import NFT from "../../public/future traders.jpg";


const SDK_Form = () => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    //  console.log("Textarea Value:", textareaValue);
    navigate("/Component/SDK_Test.jsx");
  };

  return (
    <div>
      <div className="container">
        <div className="left_side">
          <img src={Chain} alt="" />
        </div>
        {/* <div className="right_side">
          <textarea id="myTextarea" value={textareaValue} onChange={handleTextareaChange} placeholder="Prompt here..." />
          <button onClick={handleClick}>Submit</button> */}

        <div className="post-tweet">
          <form action="">
            <div className="form">
              <img src={NFT} alt="user1" />
              <textarea
                placeholder="What is happening..."
              />
            </div>
            <button type="submit" onClick={handleClick}>
              Tweet
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SDK_Form;
