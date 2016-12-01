import React, { Component } from 'react';
import Form from '../../js/components/form';
import NavApp from '../../js/components/navbar'; 

class Login extends Component {
  render() {
    return (
        <main className="skin--primary">
            <NavApp link={'/dashboard'} label={'Sign In'} />
            <div className="container">
                <div className="modal__default shadow--2d">
                    <div className="modal__header">
                        <span className="modal__header--title">Login Form</span>
                        <span className="modal__close">x</span>
                    </div>
                    <div className="modal__content">
                        <Form action={'dashboard'} forgot={'Lost your password?'} forgotLink={'/forgot'} />
                    </div>
                </div>
            </div>
        </main>
    );
  }
}

export default Login;
