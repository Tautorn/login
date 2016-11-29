import React, { Component } from 'react';
import { Navbar} from 'react-bootstrap';

class NavApp extends Component {
	render() {
		return (
			<Navbar inverse fixedTop>
			    <Navbar.Header>
			        <Navbar.Brand>
			            <a href="/">{this.props.label}</a>
			        </Navbar.Brand>
			        <Navbar.Toggle />
			    </Navbar.Header>
			</Navbar>
		);
	}
}

export default NavApp;