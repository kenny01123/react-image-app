import React, { useRef } from "react";
import "../styles/navbar.css";
import Upload from "./Upload.jsx";
import { saveObject } from "../utils/index";
import { useEffect } from "react";

export default function Navbar({ setCurrentView, setPhotos, photos }) {
  const fileRef = useRef();
  function callback(file) {
    console.log("hi", file);
    setPhotos([...photos, file]);
    saveObject(file);
    // document.getElementById("file-input").click();
    // saveObject(document.getElementById("file-input").value).catch("error");
  }

  useEffect(() => console.log("ref", fileRef.current), []);
  return (
    <div className="navbar">
      <h1 className="navbar-header">Clay and Kenny 's 西</h1>
      <button
        className="navbar-header"
        onClick={() => {
          console.log("I'm clicked!");
          setCurrentView("AllPhotos");
        }}
      >
        Show all Photos
      </button>
      <Upload forwardedRef={fileRef} callback={callback} />
    </div>
  );
}
