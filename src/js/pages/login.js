import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';
import Form from '../../js/components/form';
import NavApp from '../../js/components/navbar'; 

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showResults: true
        };
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(e) {

        this.setState({
            showResults: !this.state.showResults 
        });
    }

  render() {
    return (
        <main className="skin--primary">
            <NavApp link={'/'} label={'Sign In'} />
            <div className="container">
                <ToggleDisplay show={this.state.showResults}>
                    <div className="modal__default shadow--2d">
                        <div className="modal__header">
                            <span className="modal__header--title">Login Form</span>
                            <span className="modal__close" onClick={this.handleClose}>x</span>
                        </div>
                        <div className="modal__content">
                            <Form action={'dashboard'} forgot={'Lost your password?'} forgotLink={'/forgot'} />
                        </div>
                    </div>
                </ToggleDisplay>
            </div>
        </main>
    );
  }
}

export default Login;
