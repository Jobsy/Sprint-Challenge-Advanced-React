import React from 'react';
import axios from "axios"
import { Link, Route } from 'react-router-dom';

import Players from './components/Players';
// import Followers from './components/Followers';
// import Navbar from "./components/NavBar";

// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // users: {},
      followers: []
    };

  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players").then(response => {
      console.log("fff: ", response.data);
      this.setState({ followers: response.data });
    });
  }

  render() {
    return (
      <div className="app">
              {/* <Navbar /> */}

        {/* <div>
          <Link exact to="/"><h1>GitHub User Card</h1></Link>
          <Route exact path="/" render={(props) => <Players {...props} usersProps={this.state.users} />} />
        </div> */}

        <div>
          <Route exact path="/followers" render={(props) => <Players {...props} followersProps={this.state.followers} />} />
        </div>
      </div>
    );
  }
}

export default App;
// 