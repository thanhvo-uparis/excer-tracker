import "./createStore.css";
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
    <div className="create-store">
      <h3>Create New Store</h3>
           <form>
             <div className="list_items">
                <label>Name of store</label>
                <input type="text" onChange={handleChange} name='name' value={store.name}/>
             </div>
             <div className="list_items">
                <label>Address</label>
                <input type="text" onChange={handleChange} name='address' value={store.address}/>
             </div>
             <div className="list_items">
                <label>Country</label>
                <input type="text" onChange={handleChange} name='country' value={store.country}/>
             </div>
             <div className="store-footer">
                <button className="btn-store" onClick={submit} >Submit</button>
             </div>
           </form>
    </div>
   );
}
 
export default CreateStore;