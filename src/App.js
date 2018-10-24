import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search';
import Hotel from './Components/Hotels';

class App extends Component {

  state = {
    website:'',
    destination:'',
    startDate:{},
    endDate:{}
  }

  transfer(website, destination,startDate, endDate) {
    this.setState({
      website:website,
      destination:destination,
      startDate:startDate,
      endDate:endDate
    })
  }

  render() {
    // console.log(this.state.website);
    // console.log(this.state.destination);
    // if(JSON.stringify(this.state.startDate) !== "{}")
    // console.log(this.state.startDate.getTime());
    // if(JSON.stringify(this.state.endDate) !== "{}")
    // console.log(this.state.endDate.getTime());

    return (
      <div className="App">
          <h1>
              Welcome, Hotel booking 
          </h1>
          <Search transfer ={(website, destination, startDate, endDate) => this.transfer(website, destination, startDate, endDate)}/>
          <Hotel website={this.state.website} destination={this.state.destination} startDate={this.state.startDate} endDate = {this.state.endDate}/>
      </div>
    );
  }
}

export default App;
