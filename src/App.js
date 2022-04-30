import './App.css';
// import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Checkout from './Components/Basket/Checkout';
import LoginPage from './Components/Home/LoginPage';
import Footer from './Components/Footer';


function App() {

  return (
    <Router>
      <div className="app">
        <Header /> {/*This is a Whole Navbar */}

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/login'>
            <LoginPage />
          </Route>

          <Route exact path='/checkout'>
            <Checkout />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
