import React, { useState } from "react";
import { Header, Body, Footer } from "../components";

export const MobScreen = () => {
  const [displayImage, setDisplayImage] = useState(true);
  return (
    <div>
      <Header />
      <Body setDisplayImage={setDisplayImage} />
      <Footer displayImage={displayImage} />
    </div>
  );
};
