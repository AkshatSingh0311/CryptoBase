import sideimage from './assets/SidebarImage.png'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { CryptoState } from './CryptoContext';


const Register = () => {

    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const { setName } = CryptoState();

    const handleSubmit = async () => {

        if(!email || !password || !fullName){
            console.log("Fill all the necessary fields");
            return;
        }

        try {
          const result = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          setName(fullName);
          console.log("Account successfully created");
          console.log(result);
          history.push(`/`);
          
        } catch (error) {
          console.log("Account with similar credentials already exists");
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
                <h1>Create an Account</h1>
                <form className='loginform'>  
                <div className="feildzero">
                    <label className='fullnamelabel' for="Fullname">Full Name </label>  
                    <input type="text" className="Fullname" name="Fullname" onChange={(e)=>setFullName(e.target.value)}/>
                </div>
                <div className="fieldone">
                    <label className='emaillabel' for="Email Address">Email Address </label>  
                    <input type="email" className="email" name="Email" onChange={(e)=>setEmail(e.target.value)}/> 
                </div>
                <div className="fieldtwo">
                    <label className='passwordlabel' for="Password">Password </label> 
                    <input type="password" className="Password" name="Password" onChange={(e)=>setPassword(e.target.value)}/> 
                </div>
                </form>  
                <div className="submits">
                    <div className='logins'><Link to="/login"><button className="login"> Login</button></Link></div>
                    <div className='registers'><button className="register" onClick={handleSubmit} >Register</button></div>
                </div>
            </div>
        </div>
    );
}

export default Register;