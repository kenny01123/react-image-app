import React, { useEffect, useState } from "react";
import "../styles/styles.css";

export default function AllPhotos({
  photos,
  setPhotos,
  setCurrentView,
  setSelectPhoto,
  selectPhoto,
  renderTime
}) {
  function renderPhoto() {
    return photos.map((b64, index) => (
      //img element
      <img
        key="image"
        onClick={() => {
          console.log(index);
          setSelectPhoto(index);
          setCurrentView("SinglePhoto");
        }}
        alt="AWSphoto"
        src={"data:image/png;base64," + b64}
        className="image"
      />
      //end of img
    ));
  }
  // function renderSinglePhoto() {
  //   return <img
  //   key="image"
  //   onClick={() => {
  //     setSelectPhoto(photos.length-1);
  //     setCurrentView("SinglePhoto");
  //   }}
  //   alt="AWSphoto"
  //   src={"data:image/png;base64," + photos[photos.length-1]}
  //   className="image"
  // />
  // }

  return <div className="imageCell">{renderPhoto()}</div>;
}

// ({photos.length ? <div>{renderPhoto}</div> : <p>loading...</p>}) ;
