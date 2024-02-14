import { useState, useEffect, useRef } from "react";
import True from "./images/93828172734452.jpg";
import False from "./images/sub-buzz-7279-1661869809-15.webp";
import "./App.css";

function App() {
  const imgRef = useRef<HTMLImageElement>(null);

  const fetchState = async () => {
    const response = await fetch("https://testitp.best.krakow.pl/status1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
    const data = await response.json();

    if (data) {
      if (imgRef.current) {
        imgRef.current.src = True;
      } else {
        console.log("not loaded in correct order, please contact support");
      }
    } else {
      if (imgRef.current) {
        imgRef.current.src = False;
      } else {
        console.log("not loaded in correct order, please contact support");
      }
    }
  };

  useEffect(() => {
    fetchState();
  }, []);

  return (
    <div style={{ width: "100vw", overflow: "hidden" }}>
      <img
        style={{
          maxWidth: "100%",
          maxHeight: "100vh",
          objectFit: "cover",
          backgroundColor: "#ccc",
          display: "block",
          objectPosition: "center 0",
          margin: "0 auto",
        }}
        ref={imgRef}
      />
    </div>
  );
}

export default App;
