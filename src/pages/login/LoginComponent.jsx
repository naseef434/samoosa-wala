import React from 'react'
import "./style.css"

export default function LoginComponent({
  handleInputFieldChange,
  handleSubmit,
  error,
  setError,
}) {
  return (
    <div id="auth">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-12 mx-auto">
            <div className="card pt-4">
              <div className="card-body">

                <div className="text-center mb-5">
                  <img
                    src="assets/images/docViewer-logo.PNG"
                    height={48}
                    className="mb-4"
                  />
                  <h3>Sign In</h3>
                  <p>Please sign in to continue to DocViewer.</p>
                </div>
                {error &&
                  <div class="alert">
                    <span class="closebtn" onClick={() => { setError(false) }}>&times;</span>
                    <strong>Invlid Username/Password</strong>
                  </div>
                }
                <div className="form-group position-relative has-icon-left">
                  <label htmlFor="username">Username</label>
                  <div className="position-relative">
                    <input type="text" className="form-control" name='userName' onChange={handleInputFieldChange} id="username" />
                    <div className="form-control-icon">
                      <i data-feather="user" />
                    </div>
                  </div>
                </div>
                <div className="form-group position-relative has-icon-left">
                  <div className="clearfix">
                    <label htmlFor="password">Password</label>
                    <a href="auth-forgot-password.html" className="float-end">
                      <small>Forgot password?</small>
                    </a>
                  </div>
                  <div className="position-relative">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name='password' onChange={handleInputFieldChange}
                    />
                    <div className="form-control-icon">
                      <i data-feather="lock" />
                    </div>
                  </div>
                </div>
                {/* <div className="form-check clearfix my-4">
                    <div className="checkbox float-start">
                      <input
                        type="checkbox"
                        id="checkbox1"
                        className="form-check-input"
                      />
                      <label htmlFor="checkbox1">Remember me</label>
                    </div>
                    <div className="float-end">
                      <a href="auth-register.html">Don't have an account?</a>
                    </div>
                  </div> */}
                <div className="clearfix">
                  <button className="btn btn-primary float-end" onClick={handleSubmit}>Submit</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
