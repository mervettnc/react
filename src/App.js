import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import AddUser from "./forms/AddUser";
import UpdateUser from "./forms/UpdateUser";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from './components/NotFound'

// const Home = () => {
//   return <h3>Home</h3>;
// };

// const About = () => {
//   return <h3>About</h3>;
// };

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar title="User App" />
          <hr />

          <Switch>
            <Route exact path="/" component={Users} />
            <Route exact path="/add" component={AddUser} />
            <Route exact path="/edit/:id" component={UpdateUser} />

            <Router component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
