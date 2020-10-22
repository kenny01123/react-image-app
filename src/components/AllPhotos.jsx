import React from "react";
import "../styles/styles.css";

export default function AllPhotos({
  photos,
  setPhotos,
  setCurrentView,
  setSelectPhoto,
  selectPhoto
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

  return <div>{renderPhoto()}</div>;
}

// ({photos.length ? <div>{renderPhoto}</div> : <p>loading...</p>}) ;
