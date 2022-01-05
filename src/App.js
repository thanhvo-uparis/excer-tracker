import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import PapayesList from './components/PapayesList';
import CreatePapaye from './components/CreatePapaye';
import CreateStore from './components/CreateStore';

const App = () =>{
    const [myPapaye, setMyPapaye] = useState({});

    useEffect(() => {
        function getData() {
          const response = axios.get("http://localhost:5000/papayes");
          return response;
        }
  
        getData().then((response) => setMyPapaye(response.data))
    } , [])

    return (
        <div className='app-container'>
            <Router>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<PapayesList allPapayes={myPapaye} />}/>
                    <Route path="/papayes" element={<CreatePapaye/>}/>
                    <Route path="/stores" element={<CreateStore/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;