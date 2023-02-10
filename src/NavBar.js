import logo from './assets/CryptoBase.png'
import dp from './assets/DisplayPicture.png'
import { Link,NavLink,useHistory } from "react-router-dom";
import { CryptoState } from './CryptoContext';
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { IconContext } from "react-icons/lib";
import { IoLogOutOutline } from "react-icons/io5";

const NavBar = () => {
    
    const { user, name } = CryptoState();
    let history = useHistory();
    console.log(user);

    const logOut = () => {
        signOut(auth);
        history.push(`/`);
      };

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="website_logo"  id="navbar-complogo"/>
            </div>
            <div className="navbar-links">
                <NavLink exact activeStyle={{color: "#7716A5"}} to="/" >
                    <p>HOME</p>
                </NavLink>
                <NavLink activeStyle={{color: "#7716A5"}} to="/exchange" >
                    <p>EXCHANGE</p>
                </NavLink>
                <NavLink activeStyle={{color: "#7716A5"}} to="/portfolio" >
                    <p>PORTFOLIO</p>
                </NavLink>
                <NavLink activeStyle={{color: "#7716A5"}} to="/learn" >
                    <p>LEARN</p>
                </NavLink>
            </div>
            <div className="navbar-profileinfo">
                {user ? (
                    <>
                        <p>{ name }</p>
                        <div id="navbar-dp">
                            <img src={dp} alt="" onClick={logOut}/>
                        </div>
                        <IconContext.Provider value={{ className: "logout-icon" }}>
                            <IoLogOutOutline onClick={logOut}/>
                        </IconContext.Provider>
                    </>
                ) : (
                    <button className="sec6-button" onClick={history.push(`/login`)}>Register/Login</button>
                )}
            </div>
        </div>
    );
}

export default NavBar;