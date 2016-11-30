import React, { Component } from 'react';
import NavApp from '../../js/components/navbar';

// SERVICE REST
var data = {
	user: 'Bruno Carneiro',
	job: 'Front-End'
};

class Dashboard extends Component {

	render() {
	    return (
	        <main>
	            <NavApp link={'/signout'} label={'Sign Out'} />
	            <div className="container">
	            	<h1 className="gutter--t40 align--center"> Bem-Vindo</h1>

	            	<table className="table">
		                <thead>
		                    <tr>
		                        <th>ID</th>
		                        <th>Name</th>
		                        <th>E-mail</th>
		                        <th>Subject</th>
		                        <th>Messenger</th>
		                    </tr>
		                </thead>
		                <tbody>
		                	<tr>
				                <th scope="row">1</th>
				                <td>Bruno</td>
				                <td>brunocarneirofs@gmail.com</td>
				                <td>teste</td>
				                <td>Messenger</td>
				            </tr>
		                </tbody>
		            </table>
	            </div> 
	        </main>
	    );
	}
}

export default Dashboard;
