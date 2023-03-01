import React, { useState } from "react";
import avatar from "../images/avatar-michelle.jpg";
import iconShare from "../images/icon-share.svg";
import iconF from "../images/icon-facebook.svg";
import iconT from "../images/icon-twitter.svg";
import iconP from "../images/icon-pinterest.svg";
import iconShareWhite from "../images/sharewhite.svg";

const Card = () => {
  const [share, setShare] = useState(false);

  const handleClick = () => {
    setShare(!share);
  };

  return (
    <>
      <div className="container-fluid section-container-main ">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-lg-4 ">
              <div className="section-img-left"> </div>
            </div>
            <div className="col-lg-8">
              <div className="card-body">
                <h5 className="card-title">
                  Shift the overall look and feel by adding these wonderful
                  touches to furniture in your home
                </h5>
                <p className="card-text text-muted">
                  Ever been in a room and felt like something was missing?
                  Perhaps it felt slightly bare and uninviting. I’ve got some
                  simple tips to help you make any room feel complete.
                </p>

                <div className="section-avatar d-flex">
                  <div>
                    <img src={avatar} />
                  </div>
                  <div className="section-perfil">
                    <h5> Michelle Appleton</h5>
                    <p className="text-muted">28 Jun 2020</p>
                  </div>
                  <div>
                    {share && (
                      <div className="shareUp">
                        <h5>SHARE</h5>
                        <img className="icon-1" src={iconF} />
                        <img className="icon-2" src={iconT} />
                        <img className="icon-3" src={iconP} />
                        <div className="triangle"> </div>
                      </div>
                    )}

                    {share ? (
                      <a onClick={handleClick} className="share-img ">
                        <img src={iconShareWhite} />
                      </a>
                    ) : (
                      <a
                        onClick={handleClick}
                        className="share-img share-active "
                      >
                        <img src={iconShare} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
