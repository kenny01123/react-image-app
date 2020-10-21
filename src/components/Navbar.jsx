import React, { useState } from "react";
import "../styles/navbar.css";
import _ from "lodash";
import Upload from "./Upload.jsx";
import { listObjects, getSingleObject, saveObject } from "../utils/index";

export default function Navbar({ setCurrentView }) {
  function peanutButter(file) {
    saveObject(file).catch("error");
  }
  return (
    <div className="app">
      <button
        onClick={() => {
          console.log("I'm clicked!");
          setCurrentView("AllPhotos");
        }}
      >
        Show all Photos
      </button>
      <h2>navbar</h2>
      <Upload peanutButter={peanutButter} />
    </div>
  );
}
