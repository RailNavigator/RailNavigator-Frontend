import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
 
const API_URL = "http://localhost:5005";


function SignUp(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("Passanger");
    const [errorMessage, setErrorMessage] = useState(undefined);
   
    const navigate = useNavigate();
    
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleName = (e) => setName(e.target.value);
    const handleType = (e) => setType(e.target.value);
     

    const handleSignupSubmit = (e) => {
      e.preventDefault();
      const requestBody = { email, password, name, type };
   
      axios.post(`${API_URL}/auth/signup`, requestBody)
        .then((response) => {
          navigate('/login');
        })
        .catch((error) => {
          const errorDescription = error.response.data.message;
          setErrorMessage(errorDescription);
        })
    };




    return (
      <div className="SignupPage">
        <h1>Sign Up</h1>
   
        <form onSubmit={handleSignupSubmit}>
          <label>Email:</label>
          <input 
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
          />
   
          <label>Password:</label>
          <input 
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
   
          <label>Name:</label>
          <input 
            type="text"
            name="name"
            value={name}
            onChange={handleName}
          />

          <div>
            <label>Passenger</label>
            <input
              type="radio"
              name="type"
              value="Passenger"
              checked={type === "Passenger"}
              onChange={handleType}
            />

            <label>Staff member</label>
            <input
              type="radio"
              name="type"
              value="Staff"
              checked={type === "Staff"}
              onChange={handleType}
            />
          </div>
   
          <button type="submit">Sign Up</button>
        </form>
   
        { errorMessage && <p className="error-message">{errorMessage}</p> }
   
        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    )
}



export default SignUp