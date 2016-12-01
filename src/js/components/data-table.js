import React, { Component } from 'react';

const TableRows = (list) => {
	 return (<tr>
		<th>{list.id}</th>
        <td>{list.name}</td>
        <td>{list.email}</td>
        <td>{list.city}</td>
        <td>{list.job}</td>
        <td>
            <i className="glyphicon glyphicon-trash gutter--r10 table--icon"></i>
            <i className="glyphicon glyphicon-pencil table--icon"></i>
        </td>
    </tr>)
};

class DataTable extends Component {

	constructor(props) {
		super(props);
    	this.state = {
    		rows: this.props.list,
    		cloneRows: this.props.list
    	};
	    this.handleFilterChange = this.handleFilterChange.bind(this);
	}

	handleFilterChange(e) {

        this.setState({
            rows: !!e.target.value ? this.state.cloneRows.filter(list => list.id == e.target.value) : this.state.cloneRows
        });
    }

  render() {
    return (
        <div className="overflow">
	    	<div className="col-md-4 no-padding spacer--b40">
	            <div id="custom-search-input">
	                <div className="input-group col-md-12">
	                    <input type="text" className="form-control input-lg" placeholder="Type ID number" onChange={this.handleFilterChange}  />
	                    <span className="input-group-btn">
	                        <button className="btn btn-info btn-lg button__primary" type="button">
	                            <i className="glyphicon glyphicon-search"></i>
	                        </button>
	                    </span>
	                </div> 
	            </div>
	        </div>
        	<table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>City</th>
                        <th>Job</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                	{this.state.rows.map((list, i) =>
            			<TableRows key={i} id={list.id} name={list.name} email={list.email} city={list.city} job={list.job} />
                	)}	               	
                </tbody>
            </table>
        </div>
    );
  }
} 

export default DataTable;
