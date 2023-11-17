import React, {useState} from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import Chain from "../../public/chain.png";
import "./SDK_Form.css";

const SDK_Form = () => {
  const navigate = useNavigate(); 
  const [textareaValue , setTextareaValue] = useState('');

  const handleClick = () => {
    navigate("/Component/SDK_Test.jsx", { state: { textareaValue } });
  };

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };


  return (
    <div>
      <div className="container">
        <div className="left_side">
          <img src={Chain} alt="" />
        </div>
        <div className="right_side">
          <textarea id="myTextarea" value={textareaValue} onChange={handleTextareaChange} placeholder="Prompt here..." />
          <button onClick={handleClick}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default SDK_Form;
