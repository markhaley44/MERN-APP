import React, { Component } from 'react';
import axios from 'axios'
import EditUser from './EditUser';
import styled from 'styled-components'

const ViewStyle = styled.div`
    text-align: center;
    color: blue;
    background-color: red;
    padding: 2px;
    

`


class SingleUser extends Component {
    state = {
        user: {
            childname: '',
            age: '',
            allergies: '',
            favoritetoy: '',
            editFormVisible: false
        }
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
            <ViewStyle>
                <h1>{this.state.user.childname}</h1>
                <p> {this.state.user.age} </p>
                <p>{this.state.user.allergies}</p>
                <p>{this.state.user.favoritetoy}</p>

                <div><button onClick={this.toggleEditUser}>Edit Child</button></div>
                {/* <div>
                    <button onClick={this.createNewIdea}>Add Idea</button>
                </div> */}

                {this.state.editFormVisible ? <EditUser
                    singleUser={this.state.user}
                    getSingleUser={this.getSingleUser}
                    userId={this.state.user._id}
                    toggleEditUser={this.toggleEditUser}
                /> : null}

                <div><button onClick={this.deleteUser}>Delete Child</button></div>

            </ViewStyle>
        );
    }
}

export default SingleUser;