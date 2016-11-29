import React, { Component } from 'react';

class Modal extends Component {
    render() {
        return (
            <div className="modal fade" id="myModalHorizontal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" 
                               data-dismiss="modal">
                                   <span aria-hidden="true">&times;</span>
                                   <span className="sr-only">Close</span>
                            </button>
                            <h4 className="modal-title" id="myModalLabel">
                                Modal title
                            </h4>
                        </div>
                        <div className="modal-body">
                            <form className="form-horizontal" role="form">
                              <div className="form-group">
                                <label  className="col-sm-2 control-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" 
                                    id="inputEmail3" placeholder="Email"/>
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="col-sm-2 control-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control"
                                        id="inputPassword3" placeholder="Password"/>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                  <button type="submit" className="btn btn-default">Sign in</button>
                                </div>
                              </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default"
                                    data-dismiss="modal">
                                        Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
       );
    }
}

export default Modal;