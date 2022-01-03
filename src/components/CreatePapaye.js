import "./createPapayes.css";
import {React, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePapaye = () => {
  const navigate = useNavigate();
  const [papaye, setPapaye] = useState(
            {
              name: "",
              description: "",
              type: "",
              store: "",
            }
        );
    
    const handleChange= (e) => {
        const {name, value} = e.target;

        setPapaye(prevInput => {
          return {
              ...prevInput,
              [name]: value
          }
        })
    }
    
    const submit = (e) => {
      e.preventDefault();
      
      const newPapaye = {
        name: papaye.name,
        description: papaye.description,
        type: papaye.type,
        store: papaye.store,
      };

      axios.post("http://localhost:5000/papayes/add", newPapaye);
      navigate("/");
    }
    
  return ( 
    <div className='create-papaye'>
      <h3>Create New Papaye</h3>
           <form onSubmit={submit}>
             <div>
                <label className="list_items">Name of papaya</label>
                <input onChange={handleChange} name='name' value={papaye.name}/>
             </div>
             <div>
                <label className="list_items">Description</label>
                <input onChange={handleChange} name='description' value={papaye.description}/>
             </div>
             <div>
                <label className="list_items">Type</label>
                <input onChange={handleChange} name='type' value={papaye.type}/>
             </div>
             <div>
                <label className="list_items">Store</label>
                <input onChange={handleChange} name='store' value={papaye.store}/>
             </div>
             <button >Submit</button>
           </form>
    </div>
   );
}
 
export default CreatePapaye;