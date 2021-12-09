import react from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/navbar/Navbar';
import ExercisesList from './components/exercises/ExercisesList';
import CreateExercise from './components/exercises/CreateExercise';
import CreateUser from './components/users/CreateUser';

function App() {
  return (
    <div className="app-container">
        <p>Welcome to my page</p>
        <Router>
           <Navbar/>
           <br/>
           <Routes>
              <Route path="/" exact component="ExercisesList"/>
              <Route path="/create" exact component="CreateExercise"/>
              <Route path="/user" exact component="CreateUser"/>
           </Routes>
        </Router>
    </div>
  );
}

export default App;
