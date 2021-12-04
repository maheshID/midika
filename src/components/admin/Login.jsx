import React from 'react'
import {NavLink, Link} from 'react-router-dom'

function Login() {

    
    return (
        <>

    <div id="page-loader" className="fade show">
<span className="spinner"></span>
</div>


<div className="login-cover">
<div className="login-cover-image" style={{backgroundImage: "url(assets/img/login-bg/login-bg-17.jpg)"}} data-id="login-cover-image"></div>
<div className="login-cover-bg"></div>
</div>


<div id="page-container" className="fade">

<div className="login login-v2" data-pageload-addclassName="animated fadeIn">

<div className="login-header">
<div className="brand">
<span className="logo"></span> <b>Midika</b> Admin
<small>Login for Midika admin panel</small>
</div>
<div className="icon">
<i className="fa fa-lock"></i>
</div>
</div>


<div className="login-content">
<form method="GET" className="margin-bottom-0">
<div className="form-group m-b-20">
<input type="text" className="form-control form-control-lg" placeholder="Email Address" required />
</div>
<div className="form-group m-b-20">
<input type="password" className="form-control form-control-lg" placeholder="Password" required />
</div>

<div className="login-buttons">
<NavLink to="/dashboard">
<button type="submit" class="btn btn-success btn-block btn-lg">Sign me in</button>
</NavLink>
</div>

</form>
</div>


</div>
</div>          

  </>
    )
}

export default Login