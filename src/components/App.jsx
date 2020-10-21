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
  async function renderPhoto() {
    let listOfPhotos = await listObjects();
    let promises = await Promise.all(
      listOfPhotos.map(x => getSingleObject(x.Key))
    );
    setPhotos(promises);
  }
  //initial render
  useEffect(() => {
    renderPhoto();
  }, []);

  function displayPhotos() {
    console.log(photos);
  }
  function PhotoType({ view }) {
    if (view === "AllPhotos") {
      return <AllPhotos />;
    } else {
      return <SinglePhoto />;
    }
  }
  function sayHi() {
    return <p>hi!</p>;
  }
  return (
    <div className="app">
      <Navbar setCurrentView={setCurrentView} currentView={currentView} />
      <h1>Welcome</h1>
      <p>{JSON.stringify(photos)}</p>
      <PhotoType view={currentView} />
    </div>
  );
}
