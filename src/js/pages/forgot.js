import React, { Component } from 'react';
import NavApp from '../../js/components/navbar';

class Forgot extends Component {
  render() {
    return (
        <main className="page">
	        <NavApp link={'/'} label={'Sign in'} />
        	<div className="align--left skin--primary bar">
            	<div className="container">
            		<h4 className="">Almost there!</h4>
            	</div>
            </div>
            <div className="container">
            	<p>
					Your password has been sent to your <strong>e-mail</strong>. 
					<br />
					Please, check and enter again.
				</p>
				<p>
					Team Zup ;)
   				</p>
            </div>
        </main>
    );
  }
}

export default Forgot;
