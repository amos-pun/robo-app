import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import './index.html.css'
import Scroll from "./Scroll";

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [], 
      searchfield: ""
    } 
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => (this.setState({ robots: users})))
  }
  
  onSearchChange = (e) => {
    this.setState({searchfield:e.target.value})
  }
  
  render() {
    const filterRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    if(this.state.robots.length === 0 ){
      return <h1>Loading . . .</h1>
    }else {
      return (
        <div>
          <h1 className="text-center ">Robo Friends</h1> 
          <SearchBox searchChange={this.onSearchChange}/>
          <div className="col-lg-12">
          <Scroll>
            <CardList robots={filterRobots } />
          </Scroll>
          </div>
        </div>
      );
    }
  }
}

export default App;
