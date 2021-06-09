import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';

import OrderPlaced from './components/OrderPlaced/OrderPlaced';

function App() {
  return (
    <Router>
      <Header></Header>

      <Switch>
        <Route exact path="/">
          <Shop />
        </Route>
        <Route path="/shop">
          <Shop></Shop>
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/orderPlaced">
          <OrderPlaced></OrderPlaced>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
