import {React, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateStore = () => {
    const navigate = useNavigate();
    const [store, setStore] = useState(
      {     name: "",
            address: "",
            country: "",
      }
    );

    const handleChange= (e) => {
      const {name, value} = e.target;

      setStore(prevInput => {
        return {
            ...prevInput,
            [name]: value
        }
      })
  }

    const submit = (e) => {
    e.preventDefault();

    const newStore = {
        name: store.name,
        address: store.address,
        country: store.country,
    }
    axios.post("http://localhost:5000/stores/add", newStore);
    navigate("/");

    }

    
  return ( 
    <div>
      <h3>Create New Store</h3>
           <form>
             <div>
                <label>Name of store</label>
                <input onChange={handleChange} name='name' value={store.name}/>
             </div>
             <div>
                <label>Address</label>
                <input onChange={handleChange} name='address' value={store.address}/>
             </div>
             <div>
                <label>Country</label>
                <input onChange={handleChange} name='country' value={store.country}/>
             </div>
             <button onClick={submit} >Submit</button>
           </form>
    </div>
   );
}
 
export default CreateStore;