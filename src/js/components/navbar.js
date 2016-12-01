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
			          <MenuItem eventKey={3.1}><i className="glyphicon glyphicon-home gutter--r5"></i>Home</MenuItem>
			          <MenuItem eventKey={3.2}><i className="glyphicon glyphicon-level-up gutter--r5"></i>Jobs</MenuItem>
			          <MenuItem eventKey={3.3}><i className="glyphicon glyphicon-stats gutter--r5"></i>Something</MenuItem>
			          <MenuItem divider />
			          <MenuItem eventKey={2} href={this.props.link}>
			          	<i className="glyphicon glyphicon-log-out gutter--r5"></i>
			          	{this.props.label}
			          </MenuItem>
			        </NavDropdown>	
			      </Nav>
			    </Navbar.Collapse>
			  </Navbar>
		);
	}
}

export default NavApp;