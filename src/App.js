import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './HomePage';
import NavBar from './NavBar';
import Learn from './Learn';
import Portfolio from './Portfolio';
import Exchange from './Exchange';
import Login from './Login';
import Register from './Register';
import CoinPage from './CoinPage';

function App() {
  const balance = (1474.9109).toFixed(2);
  const changeInBalance = (301.93).toFixed(2);

  return (
    <Router>
      
      <div className="App">
        <Switch>
        <Route exact path="/">
        <NavBar />
            <HomePage />
          </Route>
          <Route exact path="/Login">
             <Login/>
          </Route>
          <Route exact path="/Register">
             <Register/>
          </Route>
          <Route exact path="/portfolio">
          <NavBar />
            <Portfolio balance={balance} changeInBalance={changeInBalance}/>
          </Route>
          <Route exact path="/exchange">
          <NavBar />
            <Exchange balance={balance} changeInBalance={changeInBalance}/>
          </Route>
          <Route exact path="/learn">
          <NavBar />
             <Learn/>
          </Route>
          <Route path="/exchange/:id" >
            <NavBar />
            <CoinPage balance={balance} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
