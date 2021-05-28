import { IconComponent } from "../components";
import React, { useState } from "react";

export const IconList = ({ setDisplayImage }) => {
  const [iconList, setIconList] = useState([
    {
      name: "camera",
      fill: "white",
      bgcolor: "rgb(90, 90, 90)",
    },
    {
      name: "package",
      fill: "grey",
      bgcolor: "rgb(192, 191, 191)",
    },
    {
      name: "grid",
      fill: "grey",
      bgcolor: "rgb(192, 191, 191)",
    },
  ]);

  const handleClick = (index) => {
    let list = [...iconList];
    if (index === 0) {
      setDisplayImage(true);
    }
    if (index !== 0) {
      setDisplayImage(false);
    }
    list.forEach((item, i) => {
      i === index
        ? (item.fill = "white") && (item.bgcolor = "rgb(90, 90, 90)")
        : (item.fill = "grey") && (item.bgcolor = "rgb(192, 191, 191)");
    });
    setIconList(list);
  };

  return (
    <div className="iconList">
      {iconList.map((icon, index) => (
        <button
          style={{ background: `${icon.bgcolor}` }}
          className="iconButton"
          key={`${icon.name}${index}`}
          onClick={() => handleClick(index)}
        >
          <IconComponent icon={icon.name} fill={icon.fill} />
        </button>
      ))}
    </div>
  );
};
