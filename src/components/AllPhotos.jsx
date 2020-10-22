import React from "react";
import _ from "lodash";
import { useRef, useEffect } from "react";
import { listObjects, getSingleObject, saveObject } from "../utils/index";
import "../styles/styles.css";

export default function AllPhotos({ photos, setPhotos }) {
  function renderPhoto() {
    return photos.map(b64 => (
      <img key="image" src={"data:image/png;base64," + b64} className="image" />
    ));
  }

  return <div>{renderPhoto()}</div>;
}

// ({photos.length ? <div>{renderPhoto}</div> : <p>loading...</p>}) ;
