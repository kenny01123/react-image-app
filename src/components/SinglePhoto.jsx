import React from "react";

export default function SinglePhoto({ photos, selectPhoto }) {
  function getSinglePhoto() {
    if (selectPhoto !== null) {
      console.log(selectPhoto);
      let photo64 = photos[selectPhoto];
      return (
        <img
          key="image"
          alt="singlePhoto"
          src={"data:image/png;base64," + photo64}
        />
      );
    }
  }

  return <div>{getSinglePhoto()}</div>;
}
