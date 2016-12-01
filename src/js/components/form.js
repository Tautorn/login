import React, { Component } from 'react';

class Form extends Component {
	render() {
		return (
			<form className="form-horizontal" method="get" action={this.props.action}>
				<div className="form-group">
				    <div className="col-sm-12">
				  		<div className="inner__addon right--addon">
	    					<i className="glyphicon glyphicon-user"></i>
							<input type="text" className="form-control" placeholder="Username" required="required"/>
						</div>
				    </div>
				</div>
				<div className="form-group">
				    <div className="col-sm-12">
				  		<div className="inner__addon right--addon">
	    					<i className="glyphicon glyphicon-lock"></i>
							<input type="password" className="form-control" placeholder="Password" minLength={6} required="required"/>
						</div>
				    </div> 
				</div>
				<div className="form-group">
				    <div className="col-sm-12">
					    <button type="submit" className="btn btn-default button__primary button--1">Sign in</button>
				  		<a className="gutter--l20 form__forgot-password" href={this.props.forgotLink}>{this.props.forgot}</a>
				    </div>
				</div>
			</form>
	   );
	}
}

export default Form;