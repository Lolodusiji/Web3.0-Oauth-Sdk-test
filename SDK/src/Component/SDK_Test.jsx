import React from 'react'
import "./SDK_Test.css";
import NFT from "../../public/future traders.jpg"

const SDK_Test = ({location}) => {

  const textareaValue =
    location && location.state ? location.state.textareaValue || "" : "";
  return (
    <div>
      <div className="container">
        <div className="tweets">
          <div className="user-pfp">
            <img src={NFT} alt="user1" />
          </div>
          <div className="user-content-box">
            <div className="user-names">
              <hi className="full-name">Eric Alvarez</hi>
              <br />
            </div>

            <div className="user-content">
              <p>{textareaValue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SDK_Test