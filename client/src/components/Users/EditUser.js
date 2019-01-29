import React, { Component } from 'react';
import axios from 'axios'


class EditUser extends Component {
    state = {
        user: []
    }

    handleChange = (event) => {
        const newState = { ...this.state.user }
        newState[event.target.name] = event.target.value
        this.setState({ user: newState })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const payload = this.state.user
        const userId = this.props.userId
        axios.patch(`/api/users/${userId}`, payload)
            .then((res) => {
                this.props.getSingleUser()
                this.props.toggleEditUserForm()
            })
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default EditUser;