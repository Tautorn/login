import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, MenuItem} from 'react-bootstrap';
import zup from './../../media/img/zup.png';

class NavApp extends Component {
	render() {
		return (
			<Navbar inverse collapseOnSelect>
			    <Navbar.Header>
			    	<div className="logo__header">
			        	<img src={zup} role="presentation" />
			        </div>
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
			      <Nav pullRight>
			      	<NavDropdown id={0} eventKey={3} title="Tools">
			          <MenuItem eventKey={3.1}>Home</MenuItem>
			          <MenuItem eventKey={3.2}>Jobs</MenuItem>
			          <MenuItem eventKey={3.3}>Something</MenuItem>
			          <MenuItem divider />
			          <MenuItem eventKey={2} href={this.props.link}>{this.props.label}</MenuItem>
			        </NavDropdown>	
			      </Nav>
			    </Navbar.Collapse>
			  </Navbar>
		);
	}
}

export default NavApp;