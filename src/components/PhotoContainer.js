import React, { useState } from "react";
import { IconComponent } from "./iconbutton";
import placeholder from "../assets/images/placeholder_small.jpg";
export const PhotoContainer = ({ displayImage }) => {
  const [imageList, setImageList] = useState(["", "", ""]);

  const handleShift = () => {
    const list = [...imageList];
    if (list.length <= 3) {
      alert("Nothing to shift");
    } else {
      const path = list.shift();
      list.push(path);
      setImageList(list);
    }
  };

  const handleUploadImage = (e) => {
    if (e.target.value) {
      const imagePath = URL.createObjectURL(e.target?.files[0]) || "";
      const list = [...imageList];
      if (list.includes("")) {
        list.splice(list.indexOf(""), 1);
      }
      list.push(imagePath);
      setImageList(list);
    }
    e.target.value = "";
  };

  const handleDeleteImage = (index) => {
    const list = [...imageList];
    list.splice(index, 1);
    if (list.length < 3) list.push("");
    setImageList(list);
  };

  return (
    <>
      {displayImage && (
        <>
          <div className="shiftIconContainer">
            <button onClick={handleShift}>
              <IconComponent icon="chevron-left" />
              <div>Back</div>
            </button>
          </div>
          <div className="photoContainer">
            <div className="imageUploadButton">
              <input
                type="file"
                accept="image/*"
                id="actual-btn"
                style={{ display: "none" }}
                onChange={(e) => handleUploadImage(e)}
              />
              <button>
                <label for="actual-btn">
                  <IconComponent icon="plus" size="20"/>
                </label>
              </button>
              <span className="addPhotoTag">Add Photo</span>
            </div>
            {imageList?.slice(0, 3)?.map((image, index) => {
              return (
                <div className="imageParentContainer">
                  <img
                    src={`${image}`}
                    alt=""
                    onError={(e) => {
                      e.target.src = placeholder;
                    }}
                    className="imageHolder"
                  />
                  {image && (
                    <div className="deleteImageContainer">
                      <button onClick={() => handleDeleteImage(index)}>
                        <IconComponent icon="x-circle" fill="white" size="20" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
