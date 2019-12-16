// import React, { useEffect } from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './Tabs.js';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countryData: []
    }
    // console.log(countryData)
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
    .then( res => res.json())
    .then( res => {
      console.log(res)
      this.setState({countryData: res})
      console.log(this.state.countryData)
    })
  }


  render() {
    console.log(this.state.countryData)
    return (
      <div className="App">
      <header className="App-header">
        <div className="header">
          <p>Tabs</p>
        </div>
      </header>
      <div className="tabs">
        <Tabs countryData={this.state.countryData}/>
      </div>
      <div className="display"></div>
    </div>
    )
  }
}


export default App;
