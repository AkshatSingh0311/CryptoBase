import sideimage from './assets/SidebarImage.png'
import G from './assets/G.png'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from "react-router-dom";
import './App.css';
import { CryptoState } from './CryptoContext';

const Login = () => {
    
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { name , setName } = CryptoState();

    const handleSubmit = async () => {
        console.log(email,password);
        if (!email || !password) {
          console.log("Credentials not provided");
          return;
        }
    
        try {
          const result = await signInWithEmailAndPassword(auth, email, password);
          setName("Umang Bhutoria");
          console.log(result);
          history.push(`/`);
        } 
        catch (error) {
          console.log("Invalid Credentials");
          return;
        }
      };
    

    return (
        <div className='body'>
            <div className='leftbar'>
            <div className="image">
                    <img src={sideimage} alt=""/>
                </div>

            </div>
            <div className='middlebar'>
                <h1>Welcome User</h1>
                <div className='logintext'>
                    Welcome to CryptoBase. 
                </div>
                <div className='logintext'>
                    Please login with your personal account
                </div>
                <form className='loginform'>  
                <div className="fieldone">
                    <label className='emaillabel' for="Email Address">Email Address </label>  <br/>
                    <input type="email" className="email" name="Email" onChange={(e)=>setEmail(e.target.value)}/> 
                </div>
                <div className="fieldtwo">
                    <label className='passwordlabel' for="Password">Password </label>  <br/>
                    <input type="password" className="Password" name="Password" onChange={(e)=>setPassword(e.target.value)}/> 
                </div>
                </form>  
                <div className="submits">
                    <div className='logins'>
                        <button className="login" onClick={handleSubmit}> Login</button>
                    </div>
                    <div className='registers'><Link to="/Register"><button className="register">Register</button></Link></div>
                </div>
            </div>
        </div>
    );
}

export default Login;