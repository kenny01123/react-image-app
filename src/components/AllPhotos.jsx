import React from "react";
import _ from "lodash";
import { useRef, useEffect } from "react";
import { listObjects, getSingleObject, saveObject } from "../utils/index";

export default function AllPhotos() {
  useEffect(() => {
    renderPhoto();
  }, []);

  async function renderPhoto() {
    let listOfPhotos = await listObjects();
    let promises = Promise.all(listOfPhotos.map(x => getSingleObject(x.Key)));
    let arrBase64 = await promises;
    console.log(arrBase64);
    arrBase64.map(b64 => <img src={"data:image/gif;base64," + b64} />);
  }
  return <div>{renderPhoto}</div>;
}
