import React, { Component } from 'react';
import axios from 'axios'
import EditUser from './EditUser';
import Classroom from '../Classroom'
import styled from 'styled-components'

const ViewStyle = styled.div`
    text-align: center;
    color: blue;
    padding: 2px;
`
class SingleUser extends Component {
    state = {
        user: {
            childname: '',
            age: '',
            allergies: '',
            favoritetoy: ''
        },
        classroom: [{}],
        editFormVisible: false
    }

    componentDidMount() {
        this.getUserClassroom()
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

    getUserClassroom = () => {
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}/classrooms`).then((res) => {
            this.setState({ classroom: res.data })
        })
    }

    toggleEditUser = () => {
        this.setState({ editFormVisible: !this.state.editFormVisible })
    }

    createNewClassroom = () => {
        const userId = this.props.match.params.userId
        axios.post(`/api/users/${userId}/classrooms`).then((res) => {
            console.log(res.data)
            this.getSingleUser()
        })
    }
    render() {
        console.log(this.state.classroom)
        return (
            <ViewStyle>
                <h1 >{this.state.user.childname}</h1>
                <h4> {this.state.user.age} yrs old</h4>
                <h5>Allergic to {this.state.user.allergies}</h5>
                <p>Fave Toy {this.state.user.favoritetoy}</p>

                <div>
                    <button class="editBtn" onClick={this.toggleEditUser}>Edit Child</button>
                </div>
                {/* <div>
                    <button onClick={this.createNewIdea}>Add Idea</button>
                </div> */}


                {this.state.editFormVisible ? <EditUser
                    singleUser={this.state.user}
                    getSingleUser={this.getSingleUser}
                    userId={this.state.user._id}
                    toggleEditUser={this.toggleEditUser}
                /> : null}
                <div>
                    <button onClick={this.deleteUser}>Delete Child</button>
                </div>
                {/* <Classroom user={this.state.user} getSingleUser={this.getSingleUser} /> */}

            </ViewStyle>
        );
    }
}

export default SingleUser;