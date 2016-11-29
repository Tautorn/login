import React, { Component } from 'react';
// import Modal from './js/components/modal';
import Form from './js/components/form';
import { Navbar} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
        <main>
            <Navbar inverse fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">React App</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
            </Navbar>
            <div className="container">
                <div className="modal__default shadow--2d">
                    <div className="modal__header">
                        <span className="modal__header--title"> Login Form</span>
                        <span className="modal__close">x</span>
                    </div>
                    <div className="modal__content">
                        <Form />
                    </div>
                </div>
            </div>
        </main>
    );
  }
}

export default App;
