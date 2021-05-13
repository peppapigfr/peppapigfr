import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.scss';
import './carousel.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jollibee from './reusable-components/Jollibee';
import Contact from './reusable-components/Contact';
import aboutUs from './reusable-components/aboutUs';
import checkOut from './reusable-components/checkOut';
import FoodLocation from './reusable-components/foodLocate';
import foodLanding from './reusable-components/foodhomepage';
import Userpage from  './reusable-components/Userpage';
import food from  './reusable-components/Restaurants';
function App() {
  return (
    <Router>
      <Header/>
      <div id="content">
        <Switch>
          <Route component={Home} exact={true} path="/" />
          <Route component={food} exact={true} path="/food-delivery">
          </Route>
        </Switch>
      </div>
      <Route component={Jollibee} exact={true} path="/jollibee"/>
      <Route component={Contact} exact={true} path="/contact-us"/>
      <Route component={aboutUs} exact={true} path="/about-Us"/>
      {/* make a button for checkout in jabi page */}
      <Route component={checkOut} exact={true} path="/check-out"/>
      <Route component={FoodLocation} exact={true} path="/food-location"/>
      <Route component={foodLanding} exact={true} path="/food-Homepage"/>
      
      <Footer/>
    </Router>
    
  );
}
export default App;
