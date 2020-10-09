import React, { Component } from "react";
import { fetchSmurfs } from '../actions'
import { connect } from "react-redux"

import "./App.css";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";



class App extends Component {

  componentDidMount() {
    this.props.fetchSmurfs()
  }


  render() {
    return (
      <div className="App">
        <h1>Welcome to the Smurf Village!</h1>
        <SmurfForm />
        <SmurfList />
      </div>
    );
  }
}

export default connect(null, { fetchSmurfs })(App);
