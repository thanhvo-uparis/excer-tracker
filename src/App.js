import react from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/navbar/Navbar';
import ExercisesList from './components/exercises/ExercisesList';
import CreateExercise from './components/exercises/CreateExercise';
import CreateUser from './components/users/CreateUser';

function App() {
  return (
    <div className="app-container">
        <Router>
           <Navbar/>
           <br/>
           <Routes>
              <Route path="/list" element={ExercisesList}/>
              <Route path="/create" element={CreateExercise}/>
              <Route path="/user" element={CreateUser}/>
           </Routes>
        </Router>
    </div>
  );
}

export default App;
