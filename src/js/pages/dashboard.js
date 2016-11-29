import React, { Component } from 'react';
import NavApp from '../../js/components/navbar';

class Dashboard extends Component {
  render() {
    return (
        <main>
            <NavApp link={'/signout'} label={'Sign Out'} />
            <div className="container">

            </div> 
        </main>
    );
  }
}

export default Dashboard;
