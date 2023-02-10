import logo from './assets/logo.png'
import bank from './assets/bank.png'
import account from './assets/account.png'
import buy from './assets/buy.png'
import news from './assets/news.png'
import twitter from './assets/twitter.png'
import instagram from './assets/instagram.png'
import facebook from './assets/facebook.png'
import { Link,NavLink } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="sec1">
                <div className="sec1-left">
                    <img src={logo} alt=" "  class="logo"/>
                </div>
                <div className="sec1-right">
                    <div className="sec1-heading">Kickstart Your Crypto Journey with CryptoBase</div><br></br>
                    <div className="sec1-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut aliquam elit. Morbi dignissim nulla vel pharetra mollis. Sed fringilla fringilla urna.</div>
                    <br></br><Link to="/Login"><button className="sec1-button">Register/Login</button></Link>
                </div>
            </div>
            <div className="sec2">
                <div className="sec2-heading">We have got you all covered</div>
                    <div className="sec2-cards">
                    
                        <div class="sec2-card">
                            <div class="sec2-container"> 
                            <Link to="/learn"><p>What is a crypto wallet?  </p> </Link>
                            </div>
                        </div>
                        
                        
                        <div class="sec2-card">
                            <div class="sec2-container"> 
                            <Link to="/learn"><p>What are the top cryptocurrencies? </p> </Link>
                            </div>
                        </div>
                        
                        <div class="sec2-card">
                            <div class="sec2-container">
                            <Link to="/learn"><p>How are cryptocurrency transactions recorded? </p> </Link>
                            </div>
                        </div>
                        
                        
                        <div class="sec2-card">
                            <div class="sec2-container"> 
                            <Link to="/learn">
                                <p>Are blockchain and cryptocurrencies the same? </p> </Link>
                            </div>
                        </div>
                    </div>
                    <div className="sec2-learn"><Link to="/learn">Learn More...</Link></div>
            </div>
            <div className="sec3">
                <div className="sec3-heading">Current Trends</div>
                <div className="sec3-body"></div>
            </div>
            <div className="sec4">
                <div className="sec4-heading">START TRADING NOW</div>
                <div className="sec4-body">
                <div className="sec4-cards">
                        <div class="sec4-card">
                            <div class="sec4-container"> 
                            <img src={account} alt=" "  class="sec4-img"/>
                                <p>Create an account  </p> 
                            </div>
                        </div>
                        <div className="line">

                        </div>
                        <div class="sec4-card">
                            <div class="sec4-container"> 
                            <img src={bank} alt=" "  class="sec4-img"/>
                                <p>Link with your bank</p> 
                            </div>
                        </div>
                        <div className="line">
                            
                        </div>
                        <div class="sec4-card">
                            <div class="sec4-container">
                                <img src={buy} alt=" "  class="sec4-img"/>
                                <p>Buy & Sell </p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec5">
                <div className="sec5-heading">STAY UP TO DATE</div>
                <div className="sec5-body">
                    <div className='news1'>
                    <img src={news} alt=" "  class="sec4-img"/>
                    <p className="newstext">Coinbase Suspends UPI Payments in India After NPCI Statement; All You Need to Know</p>
                    </div><hr></hr>
                    <div className='news1'>
                    <img src={news} alt=" "  class="sec4-img"/>
                    <p className="newstext">DOL Warns Sponsors against Permitting Cryptocurrency-Related Investments on 401(k) Plan Investment Menus</p>
                    </div><hr></hr>
                    <div className='news1'>
                    <img src={news} alt=" "  class="sec4-img"/>
                    <p className="newstext">ESET Research discovers scheme to steal cryptocurrency from Android and iPhone users</p>
                    </div><hr></hr>
                    <div className='news1'>
                    <img src={news} alt=" "  class="sec4-img"/>
                    <p className="newstext"> From Coinbase to Coinswitch: How lack of easy UPI options for crypto exchanges in India is affecting volumes</p>
                    </div>
                </div>
            </div>
            <div className="sec6">
                <div className="sec6-heading">JOIN FOR FREE</div>
                <Link to="/Login"><button className="sec6-button">Sign Up</button></Link>
                <br></br>
                <br></br>
                <div className="footerdown">
                    <div className="footerdown-left">
                        <img src={twitter} alt=" "  class="socials"/>
                        <img src={facebook} alt=" "  class="socials"/>
                        <img src={instagram} alt=" "  class="socials"/>
                    </div>
                    <div className="footerdown-right">
                    <div className="navbar1">
                        <div className="navbar-links1">
                            <NavLink to="/" >
                                <p>HOME</p>
                            </NavLink>
                            <NavLink to="/exchange" >
                                <p>EXCHANGE</p>
                            </NavLink>
                            <NavLink to="/portfolio" >
                                <p>PORTFOLIO</p>
                            </NavLink>
                            <NavLink to="/learn" >
                                <p>LEARN</p>
                            </NavLink>
                        </div>
                     </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomePage;