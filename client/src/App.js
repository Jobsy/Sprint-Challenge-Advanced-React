import React from 'react';
import axios from "axios"
import { Link, Route } from 'react-router-dom';

import Users from './components/Users';
import Followers from './components/Followers';
import Navbar from "./components/NavBar";

// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: {},
      followers: []
    };

  }

  

  render() {
    return (
      <div className="app">
              <Navbar />

        <div>
          <Link exact to="/"><h1>GitHub User Card</h1></Link>
          <Route exact path="/" render={(props) => <Users {...props} usersProps={this.state.users} />} />
        </div>

        <div>
          <Route exact path="/followers" render={(props) => <Followers {...props} followersProps={this.state.followers} />} />
        </div>
      </div>
    );
  }
}

export default App;
