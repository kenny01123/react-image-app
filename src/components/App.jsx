import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import AllPhotos from "./AllPhotos.jsx";
import Navbar from "./Navbar.jsx";
import SinglePhoto from "./SinglePhoto.jsx";
import { listObjects, getSingleObject } from "../utils/index";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [selectPhoto, setSelectPhoto] = useState(null);
  const [currentView, setCurrentView] = useState("AllPhotos");

  useEffect(() => {
    getPhotos();
  }, []);

  async function getPhotos() {
    //get photos from db
    let listOfPhotos = await listObjects();

    let promises = Promise.all(listOfPhotos.map(x => getSingleObject(x.Key)));
    let arrBase64 = await promises;
    //set photos to state
    setPhotos(arrBase64);
  }

  function PhotoType(view) {
    console.log(view);
    if (view === "AllPhotos") {
      return (
        <AllPhotos
          setPhotos={setPhotos}
          setCurrentView={setCurrentView}
          photos={photos}
          setSelectPhoto={setSelectPhoto}
          selectPhoto={selectPhoto}
        />
      );
    } else {
      return <SinglePhoto photos={photos} selectPhoto={selectPhoto} />;
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
      {PhotoType(currentView)}
    </div>
  );
}
