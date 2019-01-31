import React, { Component } from 'react';
import axios from 'axios';
import AddUser from './AddUser';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ChildStyle = styled.div`
    text-align: center;
    border: 1px solid #409;
    color: blue;
`

class Userlist extends Component {
    state = {
        user: [{}],
        addUserVisible: false

    }

    componentDidMount = () => {
        this.getAllUser();
    }

    getAllUser = () => {
        axios.get(`/api/users`)
            .then((res) => {
                this.setState({ user: res.data })
            })
    }
    toggleAddUser = () => {
        this.setState({ addUserVisible: !this.state.addUserVisible })
    }

    render() {
        return (
            <ChildStyle>
                <container>
                    <h1>Select Your Child's Name</h1>
                    {this.state.addUserVisible ? <AddUser getAllUser={this.getAllUser} toggleAddUser={this.toggleAddUser} /> : null}
                    {this.state.user.map((user, i) => (
                        <div key={i}>
                            <Link to={`/users/${user._id}`}><h3>{user.childname}</h3></Link>
                        </div>
                    ))}
                    <button onClick={this.toggleAddUser}>Add New Child</button>

                </container>
            </ChildStyle>
        );
    }
}

export default Userlist;