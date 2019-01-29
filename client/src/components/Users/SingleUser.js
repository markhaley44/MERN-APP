import React, { Component } from 'react';
import axios from 'axios'
import EditUserForm from './EditUserForm';

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

    toggleEditUserForm = () => {
        this.setState({ editFormVisible: !this.state.editFormVisible })
    }

    createNewIdea = () => {
        const userId = this.props.match.params.userId
        axios.post(`/api/users/${userId}/ideas`).then((res) => {
            console.log(res.data)
            this.getSingleUser()
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.user.username}</h1>
            </div>
        );
    }
}

export default SingleUser;