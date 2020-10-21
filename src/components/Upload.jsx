import React from "react";
import _ from "lodash";
import "../styles/upload.css";

export default function Upload({ peanutButter }) {
  return (
    <div className="file-upload">
      <p>upload exists</p>
      <button onClick={peanutButter}> Upload </button>
    </div>
  );
}
