"use client";
import axios from "axios";
import "./globals.css";
import React, { useState } from "react";
const blogs = () => {
  const [Images, setImages] = useState([]);
  const getImages = async () => {
    const raw = await axios.get("https://picsum.photos/v2/list");
    setImages(raw.data);
    //console.log(Images);
  };
  return (
    <div>
      <button className="button" onClick={getImages}>
        Get Images
      </button>
      <div className="main">
        {Images.map((elem) => {
          return <img src={elem.download_url} height="200" width="300" />;
        })}
      </div>
    </div>
  );
};

export default blogs;
