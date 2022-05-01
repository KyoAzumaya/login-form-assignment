import React, { Component } from "react";

export default class LoginForm extends Component {
  render() {
    return (
      <div className="App">
        <h3 className="text-center">Azumaya Basketball Training</h3>

        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <h4 className="text-center py-4">Sign In To Your Account</h4>
                <div className="form">
                  <form>
                    <div className="input-container text-center">
                      <label className="pb-4">Username:</label>
                      <input type="text" placeholder="Enter Username:"></input>
                    </div>
                    <div className="input-container text-center">
                      <label>Password:</label>
                      <input type="password" placeholder="Enter Password:" />
                    </div>
                    <div className="button-container text-center py-4">
                      <button className="btn btn-primary">Login</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
