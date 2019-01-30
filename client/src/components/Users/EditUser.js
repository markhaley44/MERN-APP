import React, { Component } from 'react';
import axios from 'axios'


class EditUser extends Component {
    state = {
        user: this.props.singleUser
    }


    handleChange = (event) => {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
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
                        <input type="text" placeholder="favoritetoy" name="favoritetoy"
                            onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div>
                        <input type="text" placeholder="age" name="age"
                            onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div>
                        <input type="text" placeholder="allergies" name="allergies" value={this.state.user.allergies}
                            onChange={(event) => this.handleChange(event)} />
                    </div>

                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default EditUser;