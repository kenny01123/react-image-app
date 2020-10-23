import React, { useRef } from "react";
import "../styles/navbar.css";
import Upload from "./Upload.jsx";
import { saveObject } from "../utils/index";
import { useEffect } from "react";
import AWS from "aws-sdk";
export default function Navbar({
  setCurrentView,
  setPhotos,
  photos,
  renderTime,
  renderAgain,
  getPhotos
}) {
  const fileRef = useRef();
  function callback(file) {
    console.log(file);
    save(file);
    window.location.reload(false);
  }
  async function save(file) {
    return await saveObject(file);
  }
  useEffect(() => console.log("ref", fileRef.current), []);
  return (
    <div className="navbar">
      <h1 className="navbar-header">Clay and Kenny 's 西</h1>
      <button
        className="navbar-header"
        id="allPhoto"
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
