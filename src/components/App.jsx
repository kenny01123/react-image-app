import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import AllPhotos from "./AllPhotos.jsx";
import Navbar from "./Navbar.jsx";
import SinglePhoto from "./SinglePhoto.jsx";
import Upload from "./Upload.jsx";
import { listObjects, getSingleObject, saveObject } from "../utils/index";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [selectPhoto, setSelectPhoto] = useState("String");
  const [currentView, setCurrentView] = useState("");
  const [renderTime, setTime] = useState(0);
  //initial render

  useEffect(() => {
    console.log("rendered again!");
  }, [photos]);
  // function displayPhotos() {
  //   return photos.map(code=> <img src={`data:image/jpeg;base64,${code}`}/>);
  // }

  function displayPhotos() {
    return photos.map(code => <img src={"data:image;base64" + code} />);
  }

  function sayHi() {
    const arr = [1, 2, 3];
    return arr.map(x => <p>{x}</p>);
  }
  function PhotoType({ view }) {
    if (view === "AllPhotos") {
      return <AllPhotos />;
    } else {
      return <SinglePhoto />;
    }
  }

  return (
    <div className="app">
      <Navbar
        setCurrentView={setCurrentView}
        currentView={currentView}
        setPhotos={setPhotos}
        photos={photos}
      />
      <AllPhotos setPhotos={setPhotos} photos={photos} />
      <p>{photos}</p>
      {sayHi()}
      <PhotoType view={currentView} />
    </div>
  );
}
