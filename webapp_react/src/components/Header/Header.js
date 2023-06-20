import React from "react";
import user_icon from "../../assets/user_icon.png";
import message_box from "../../assets/message_box.png";
import "./Header.css";

function Header() {
  return (
    <header className="flexContainer">
      <div className="flexContainerHalf1">
        <nav>
          <span className="header_logo_text">ChattGlobal</span>
        </nav>
      </div>
      <div className="flexContainerHalf2">
        <div className="message_box">
          <img className="userIcon" src={message_box} alt="message box icon" />
        </div>
        <div className="userIconDiv">
          <img className="userIcon" src={user_icon} alt="user icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
