import React, { useEffect, useRef } from "react";
import "../styles/upload.css";

export default function Upload({ callback, forwardedRef }) {
  useEffect(() => console.log("forwarded", forwardedRef.current));
  return (
    <div>
      {/* <button className="button" onClick={peanutButter()}>upload</button> */}
      <input
        ref={forwardedRef}
        className="file-upload"
        id="file-input"
        type="file"
        onChange={e => {
          callback(e.target.files[0]);
        }}
      ></input>
    </div>
  );
}
