import React, { Component } from 'react';
import axios from 'axios'

class AddUser extends Component {
    state = {
        user: {
            childname: '',
            age: '',
            allergies: '',
            favoriteToy: ''
        }
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
                this.props.getAllUser()
                this.props.toggleAddUser()
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" placeholder="childname" name="childname" value={this.state.user.childname}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="text" placeholder="age" name="age" value={this.state.user.age}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="text" placeholder="allergies" name="allergies" value={this.state.user.allergies}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="text" placeholder="favoriteToy" name="favoriteToy" value={this.state.user.favoriteToy}
                            onChange={this.handleChange} />
                    </div>

                    <button>Submit</button>


                </form>
            </div>
        );
    }
}

export default AddUser;