import React from "react";

export default function SinglePhoto({ photos, selectPhoto }) {
  function getSinglePhoto() {
    if (selectPhoto !== null) {
      console.log(selectPhoto);
      let photo64 = photos[selectPhoto];
      return (
        <div className="singleDiv">
          <img
            key="image"
            alt="singlePhoto"
            src={"data:image/;base64," + photo64}
            className="single-photo"
          />
        </div>
      );
    }
  }

  return <div>{getSinglePhoto()}</div>;
}
