import React, { Component } from 'react';
// import Modal from './js/components/modal';
import Form from './js/components/form';

class App extends Component {
  render() {
    return (
        <main>
            <nav className="navbar navbar-light bg-faded">
                <a className="navbar-brand float-right" href="#">Navbar</a>
            </nav>
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
