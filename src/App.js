import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import PapayesList from './components/PapayesList';
import CreatePapaye from './components/CreatePapaye';
import CreateStore from './components/CreateStore';

const App = () =>{
    return (
        <div className='app-container'>
            <Router>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<PapayesList/>}/>
                    <Route path="/papayes" element={<CreatePapaye/>}/>
                    <Route path="/stores" element={<CreateStore/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;