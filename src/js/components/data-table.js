import React, { Component } from 'react';

const TableRows = (list) => {
	 return (<tr>
		<th>{list.id}</th>
        <td>{list.name}</td>
        <td>{list.email}</td>
        <td>{list.city}</td>
        <td>{list.job}</td>
    </tr>)
};

class DataTable extends Component {
  render() {
    return (
        <main>
            <div className="row">
            	<table className="table">
	                <thead>
	                    <tr>
	                        <th>ID</th>
	                        <th>Name</th>
	                        <th>E-mail</th>
	                        <th>City</th>
	                        <th>Job</th>
	                    </tr>
	                </thead>
	                <tbody>
	                	{this.props.list.map((list, i) =>
                			<TableRows key={i} id={list.id} name={list.name} email={list.email} city={list.city} job={list.job} />
	                	)}	               	
	                </tbody>
	            </table>
            </div>
        </main>
    );
  }
} 

export default DataTable;
