import React, { useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import { Link } from 'react-router-dom'

function Navbar() {

const { isLoggedIn, user, logOutUser } = useContext(AuthContext)

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
 
      {/*    UPDATE     */}
      {isLoggedIn && (
        <>
          <Link to="/profile">
            <button>My Profile</button>
          </Link>        
          <button onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
        </>
      )}
 
      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}
    </nav>
  )
}

export default Navbar

