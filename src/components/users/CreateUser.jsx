import react, {Component} from "react";
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: ""
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username
        };
        
        console.log(user);

        axios.post("http://localhost:5000/user/add", user).then(response => console.log(response.data));

        this.setState({
            username: ""
        })
    }

    
    render(){
        return(
            <div>
                <p>Create User here</p>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="" className="username">User name</label>
                    <input type="text" className="ipt-username"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                    />
                    <div className="form-footer">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}

/*
const CreateUser = () => {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: ""
        }
    }


    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username
        };
        
        console.log(user);
    }

    return(
        <div>
            <p>Create User here</p>
            <form>
                <label htmlFor="" className="username">User name</label>
                <input type="text" className="ipt-username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                />
                <div className="form-footer">
                    <input />
                </div>
            </form>
        </div>
    )
}

export default CreateUser;
*/