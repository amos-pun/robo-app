import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import './index.html.css'
import Scroll from "../Components/Scroll";

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
    const { robots, searchfield } = this.state
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
      return !robots.length ? 
        <h1>Loading . . .</h1> :
       (
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


export default App;
