import React, { Component } from 'react';
import axios from 'axios';

class Userlist extends Component {
    state = {
        user: []
    }

    componentDidMount = () => {
        this.getAllUser();
    }

    getAllUser = () => {
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



    render() {
        return (
            <div>
                <h1>Hi from User View</h1>
            </div>
        );
    }
}

export default Userlist;