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
	{id:4, name: 'Beltrano', email: 'beltrano@yahoo.com', city: 'San Diego', job: 'Manager'},
	{id:5, name: 'Xpto', email: 'xpt@yahoo.com', city: 'Salvador', job: ''}
]

class Dashboard extends Component {

	render() {
	    return ( 
	        <main className="page">
	            <NavApp link={'/'} label={'Sign Out'} session={true} />
	            <div className="align--left skin--primary bar">
	            	<div className="container">
	            		<h4 className="">Welcome - {data.user}</h4>
	            	</div>
	            </div>
	            <div className="container">
	            	<DataTable list={list} />
	            </div> 
	        </main>
	    );
	}
}

export default Dashboard;
