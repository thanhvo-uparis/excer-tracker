import {React, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({username: ""});

    const submit = (e) => {
    e.preventDefault();
    const newUser = {
        username: user,
    }
    axios.post("http://localhost:5000/user/add", newUser);
    navigate("/");


    }

    
  return ( 
    <div>
      <h3>Create New User</h3>
           <form>
             <div>
                <label>User name</label>
                <input onChange={e => setUser(e.target.value)}/>
             </div>
             <button onClick={submit} >Submit</button>
           </form>
    </div>
   );
}
 
export default CreateUser;