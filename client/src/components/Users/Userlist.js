import React, { Component } from 'react';
import axios from 'axios';
import AddUser from './AddUser';

import { Link } from 'react-router-dom'

class Userlist extends Component {
    state = {
        user: [{}],
        addUserVisible: false

    }

    componentDidMount = () => {
        this.getAllUser();
    }

    getAllUser = () => {
        axios.get(`/api/users`)
            .then((res) => {
                this.setState({ user: res.data })
            })
    }
    toggleAddUser = () => {
        this.setState({ addUserVisible: !this.state.addUserVisible })
    }

    render() {
        return (
            <div>
                <h1>Hi from User View</h1>
                <button onClick={this.toggleAddUser}>Create new user</button>
                {this.state.addUserVisible ? <AddUser getAllUser={this.getAllUser} toggleAddUser={this.toggleAddUser} /> : null}
                {this.state.user.map((user, i) => (
                    <div key={i}>
                        <Link to={`/users/${user._id}`}><h3>{user.childname}</h3></Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default Userlist;