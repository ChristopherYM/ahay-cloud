import React, { useState } from "react";
import "./App.css";
import "./estilos.css";
import axios, { Axios } from "axios";
import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

export default function App() {

  const [videoGet, setVideoGet] = useState("")
  const [videoList, setVideoList] = useState([])

  const userData = async () => {
    const response = await axios.get('https://ahay-328fca07ad48.herokuapp.com/api/get?param=' + videoGet);
    setVideoList(response.data);
  };

  return (
    <div className="App">
      
      <div className="search-container">
        <h2 className="estuiloY">ahay</h2>
        <input type = "text" className="searchinput" name = "videoGet" placeholder="¿Qué deseas buscar?" onChange = {(event) => {
          setVideoGet(event.target.value);
        }}
        />
        <Button startIcon={<SearchIcon />} style={{ 
          backgroundColor: 'rgb(93, 72, 145)', 
          color: 'rgb(255,32,0)',
          height: 50,
          placeItems: 'center',
          borderRadius: 9,
          }} 
          onClick={userData}></Button>
      </div>

      {videoList.map((val) => {
        return (
          <div className="estiloData">
            <h1>{val.video_title} </h1>
            <p> Palabra buscada: {val.label} | Segundo que aparece: {val.at_second} </p>
            <p>
              Url: 
              <a href={'https://storage.googleapis.com/videos_yolo/' + val.video_title} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                {'https://storage.googleapis.com/videos_yolo/' + val.video_title}
              </a>
            </p>
          </div>
        );
      })}
      
    </div>
  );
}

