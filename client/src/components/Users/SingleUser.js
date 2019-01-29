import React, { Component } from 'react';
import axios from 'axios'
import EditUser from './EditUser';

class SingleUser extends Component {
    state = {
        user: [],
        editFormVisible: false

    }
    componentDidMount() {
        this.getSingleUser()
    }
    getSingleUser = () => {
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`)
            .then((res) => {
                this.setState({ user: res.data })
            })
    }
    deleteUser = () => {
        const userId = this.props.match.params.userId
        axios.delete(`/api/users/${userId}`)
            .then(() => this.props.history.goBack())
    }

    toggleEditUser = () => {
        this.setState({ editFormVisible: !this.state.editFormVisible })
    }

    // createNewIdea = () => {
    //     const userId = this.props.match.params.userId
    //     axios.post(`/api/users/${userId}/ideas`).then((res) => {
    //         console.log(res.data)
    //         this.getSingleUser()
    //     })
    // }
    render() {
        return (
            <div>
                <h1>{this.state.user.username}</h1>
                <p>Password: {this.state.user.password}</p>
                <div><button onClick={this.toggleEditUserForm}>Edit User</button></div>
                <div>
                    <button onClick={this.createNewIdea}>Add Idea</button>
                </div>
                {this.state.editFormVisible ? <EditUser
                    getSingleUser={this.getSingleUser}
                    userId={this.state.user._id}
                    toggleEditUser={this.toggleEditUser}
                /> : null}
                <div><button onClick={this.deleteUser}>Delete User</button></div>

            </div>
        );
    }
}

export default SingleUser;