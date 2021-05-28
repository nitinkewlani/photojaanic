import React, { useState, useRef } from "react";
import { IconList } from "./iconlist";
import { IconComponent } from "./iconbutton";

export const Body = ({ setDisplayImage }) => {
  const [textValue, setTextValue] = useState("");
  const [tempValue, setTempValue] = useState([]);
  // const tempValue = [];
  const icons = [
    { icon: "rotate-ccw", name: "undo" },
    { icon: "repeat", name: "redo" },
    { icon: "image", name: "image" },
    { icon: "type", name: "text" },
  ];
  const textRef = useRef(null);

  const handleChange = (e) => {
    const {
      target: { value = "" },
    } = e || {};
    if (value.length) setTextValue(value);
    else setTextValue("");
  };

  const handlePush = () => {
    //for undo push to stack
    if (textValue.trim().length) {
      const list = textValue.trim().split(" ") || [];
      const lastElement = list[list?.length - 1];
      tempValue.push(lastElement);
      setTextValue(list.slice(0, list?.length - 1).join(" "));
      setTempValue(tempValue);
    } else {
      alert("Nothing to be undone!");
    }
  };

  const handlePop = () => {
    //for redo pop from stack
    if (tempValue.length) {
      const list = textValue.trim().split(" ");
      const lastElement = tempValue.pop();
      list.push(lastElement);
      setTextValue(list.join(" "));
    } else {
      alert("Nothing to be redone!");
    }
  };

  const handleClick = (value) => {
    if (value === "text") {
      textRef.current.focus();
    }
    if (value === "undo") {
      handlePush();
    }
    if (value === "redo") {
      handlePop();
    }
    if (value === "image") {
      alert("No functionality! Sorry!");
    }
  };

  return (
    <div className="bodyComponent">
      <div className="bodyIconsContainer">
        {icons.map(({ icon, name }) => (
          <div className="singleIcon">
            <button
              className="singleIconButton"
              onClick={() => handleClick(name)}
            >
              <IconComponent icon={icon} />
            </button>
            <div className="singleIconNameTag">{name}</div>
          </div>
        ))}
      </div>
      <textarea
        ref={textRef}
        className="textField"
        value={textValue}
        onChange={handleChange}
      ></textarea>
      <IconList setDisplayImage={setDisplayImage} />
    </div>
  );
};
