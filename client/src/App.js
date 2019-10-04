import React from 'react';
import axios from "axios"
import { Route } from 'react-router-dom';

import Players from './components/Players';
import Navbar from "./components/NavBar";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };

  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players").then(response => {
      this.setState({ players: response.data });
    });
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <div>
          <Route exact path="/" render={(props) => <Players {...props} playersProps={this.state.players} />} />
        </div>
      </div>
    );
  }
}

export default App;
