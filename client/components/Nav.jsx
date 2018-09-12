import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/logout'

function Nav(props) {
  
  return (
    <div className="nav">
    {props.auth.isAuthenticated
      ? //display if logged in
      <div className="navbar-start">
        <h1>Anamata</h1>
        <div className="navbar-end">
          <span>{props.auth.user.username} </span>
          <Link to="/">Home</Link>
          <button onClick={() => props.dispatch(logoutUser())}>Logout</button>
        </div>
      </div>
      : //display if not logged in
      <div className="navbar-start">
        <h1>Anamata</h1>
        <div className="navbar-end">
          <Link to="/login">Login</Link>;
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>     
    }
    </div>
  )
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Nav)