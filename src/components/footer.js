import React, { useRef, useState, useEffect } from "react";
import { PhotoContainer } from "./PhotoContainer";
import { IconComponent } from "./iconbutton";

export const Footer = ({ displayImage }) => {
  const nameRef = useRef(null);
  const [edit, setEdit] = useState(false);
  const localName = localStorage.getItem("name") || "";
  const [name, setName] = useState(localName || "");

  useEffect(() => {
    nameRef.current.disabled = true;
    setName(localName);
  }, []);

  const handleEdit = () => {
    nameRef.current.disabled = false;
    nameRef.current.focus();
    setEdit(true);
  };

  const handleSave = () => {
    nameRef.current.disabled = true;
    localStorage.setItem("name", name);
    setEdit(false);
  };

  const handleCancel = () => {
    nameRef.current.disabled = true;
    setEdit(false);
  };

  return (
    <div className="footerComponent">
      {displayImage && (
        <div className="footerInputBox">
          <div className="photoTag">Photos</div>
          <input
            type="text"
            ref={nameRef}
            value={name}
            // disabled={!edit}
            onChange={(e) => setName(e.target.value)}
          />
          {!edit && (
            <div className="editContainer">
              <IconComponent icon="edit-3" size="20" onClick={handleEdit} />
            </div>
          )}
          {edit && (
            <div className="cancelSaveContainer">
              <IconComponent icon="check" size="20" onClick={handleSave} />
              <IconComponent icon="x" size="20" onClick={handleCancel} />
            </div>
          )}
        </div>
      )}
      <PhotoContainer displayImage={displayImage} />
    </div>
  );
};
