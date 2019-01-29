import React, { Component } from 'react';
import axios from 'axios';
import AddUser from './AddUser';

import { Link } from 'react-router-dom'

class Userlist extends Component {
    state = {
        user: [{}],
        addUserFormVisible: false

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
        this.setState({ addUserFormVisible: !this.state.addUserFormVisible })
    }

    render() {
        return (
            <div>
                <h1>Hi from User View</h1>
                <button onClick={this.toggleAddUserForm}>Create new user</button>
                {this.state.addUserFormVisible ? <AddUser
                    getAllUsers={this.getAllUsers}
                    toggleAddUserForm={this.toggleAddUserForm}
                /> : null}
                {this.state.users.map((user, i) => (
                    <div key={i}>
                        <Link to={`/users/${user._id}`}><h3>{user.username}</h3></Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default Userlist;