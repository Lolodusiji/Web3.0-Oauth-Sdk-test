import React from 'react'
import "./SDK_Test.css";
import NFT from "../../public/future traders.jpg"

const SDK_Test = () => {
   
  return (
    <div>
      <div className="containers">
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
              <p>Eat. Code, Sleep. repeat! </p>
            </div>
          </div>
        </div>

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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                soluta dignissimos magni exercitationem deserunt in rerum
                reprehenderit neque tempora sed rem quam non beatae a,
                recusandae fugit perspiciatis at repellendus.{" "}
              </p>
            </div>
          </div>
        </div>

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
              <p>
                {" "}
                exercitationem deserunt in rerum reprehenderit neque tempora sed
                rem quam non beatae a, recusandae fugit perspiciatis at
                repellendus.
              </p>
            </div>
          </div>
        </div>

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
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, voluptatibus. Quod inventore, minus asperiores at harum ipsam praesentium. Commodi perferendis sed soluta architecto tempore id expedita, quibusdam inventore non facere.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SDK_Test