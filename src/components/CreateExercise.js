import {React, useState} from 'react';
import axios from 'axios';
import './createExercice.css';

const CreateExercise = () => {
  const [exercise, setExercise] = useState(
            {
              username: "",
              description: "",
              duration: 0,
            }
        );
    
    const handleChange= (e) => {
        const {name, value} = e.target;

        setExercise(prevInput => {
          return {
              ...prevInput,
              [name]: value
          }
        })
    }
    
    const submit = (e) => {
      e.preventDefault();
      
      const newExercise = {
        username: exercise.username,
        description: exercise.description,
        duration: exercise.duration,
      };

      axios.post("http://localhost:5000/exercise/add", newExercise);
    }
    
  return ( 
    <div className='create-exercise'>
      <h3>Create New Exercise Log</h3>
           <form onSubmit={submit}>
             <div>
                <label>User name</label>
                <input onChange={handleChange} name='username' value={exercise.username}/>
             </div>
             <div>
                <label>Description</label>
                <input onChange={handleChange} name='description' value={exercise.description}/>
             </div>
             <div>
                <label>Duration</label>
                <input onChange={handleChange} name='duration' value={exercise.duration}/>
             </div>
             <button >Submit</button>
           </form>
    </div>
   );
}
 
export default CreateExercise;