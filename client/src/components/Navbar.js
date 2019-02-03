import React, { Component } from 'react';
import styled from 'styled-components'

const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

class Navbar extends Component {
    render() {
        return (
            <NavBar>
                <FlatButton
                    href="/"
                    label="Home"
                    primary={true}
                    icon={<ActionHome />}
                />
            </NavBar>
        );
    }
}

export default Navbar;