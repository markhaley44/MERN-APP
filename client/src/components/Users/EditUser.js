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
                this.props.toggleEditUser()
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" placeholder="childname" name="childname" value={this.state.user.childname}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type="text"
                            placeholder="password"
                            value={this.state.user.password}
                            onChange={this.handleChange}
                            name="password" />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default EditUser;