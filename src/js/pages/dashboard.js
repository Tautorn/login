import React, { Component } from 'react';
import NavApp from '../../js/components/navbar';
import DataTable from '../../js/components/data-table';

// SERVICE REST
var data = {
	user: 'Bruno Carneiro',
	job: 'Front-End'
};

var list = [
	{id:1, name: 'Bruno Carneiro', email: 'brunocarneirofs@gmail.com', city: 'Uberaba', job: 'Front-End'},
	{id:2, name: 'Fulano de Tal', email: 'fulanotal@hotmail.com.br', city: 'Uberlândia', job: 'Engineer'},
	{id:3, name: 'Ciclano', email: 'ciclano@gmail.com', city: 'Campinas', job: 'Architect'},
	{id:4, name: 'Beltrano', email: 'beltrano@yahoo.com', city: 'San Diego', job: 'Manager'}
]

class Dashboard extends Component {

	render() {
	    return (
	        <main>
	            <NavApp link={'/signout'} label={'Sign Out'} />
	            <div className="container">
	            	<h1 className="gutter--t40 align--center"> Bem-Vindo</h1>
	            	<DataTable list={list} />
	            </div> 
	        </main>
	    );
	}
}

export default Dashboard;
