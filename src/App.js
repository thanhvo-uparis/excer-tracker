import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ExercisesList from './components/ExercisesList';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';

const App = () =>{
    return (
        <div className='app-container'>
            <Router>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<ExercisesList/>}/>
                    <Route path="/create" element={<CreateExercise/>}/>
                    <Route path="/user" element={<CreateUser/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;