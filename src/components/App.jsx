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

  async function getPhotos() {
    //get photos from db
    let listOfPhotos = await listObjects();

    let promises = Promise.all(listOfPhotos.map(x => getSingleObject(x.Key)));
    let arrBase64 = await promises;
    //set photos to state
    setPhotos(arrBase64);
  }

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
      <PhotoType view={currentView} />
    </div>
  );
}
