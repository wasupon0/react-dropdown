import React, { useRef, useState } from "react";
import down_arrow from "./down_arrow.svg";
import "./Dropdown.css";

export default function Dropdown() {
  const [isToggle, setIsToggle] = useState(false);
  const [heightEl, setHeightEl] = useState("0px");

  const refHeight = useRef(null);

  const toggleDropDown = () => {
    if (!isToggle) {
      setHeightEl(`${refHeight.current.scrollHeight}px`);
      setIsToggle(true);
    } else {
      setIsToggle(false);
    }
  };

  return (
    <div className="dropdown">
      <button className="btn-top">
        <span>Modify</span>
        <img
          onClick={toggleDropDown}
          className={isToggle ? "active" : "not-active"}
          src={down_arrow}
          alt="down arrow icon"
          width={"20px"}
        />
      </button>
      <div
        ref={refHeight}
        className="block-links"
        style={{ height: isToggle ? heightEl : "0px" }}
      >
        <ul onClick={toggleDropDown}>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
