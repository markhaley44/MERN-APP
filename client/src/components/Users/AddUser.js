import React, { Component } from 'react';
import axios from 'axios'

class AddUser extends Component {
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
        axios.post('/api/users', payload)
            .then((res) => {
                this.props.getAllUsers()
                this.props.toggleAddUserForm()
            })
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default AddUser;