import React, { Component } from "react";
import CardList from "../../Components/CardList/CardList";
import SearchBox from "../../Components/SearchBox/SearchBox";
import Scroll from "../../Components/Scroll/Scroll";
import "./App.css";

class App extends Component {
  state = {
    robots: [],
    searchField: ""
  };
  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  render() {
    const { robots, searchField } = this.state;
    let filterRobots = robots;
    filterRobots = filterRobots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return !robots.length ? (
      <h1>Loading....</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Robots Friend</h1>
        <SearchBox
          onSearchChange={this.onSearchChange}
          searchField={searchField}
        />
        <Scroll>
          <CardList robots={filterRobots} />
        </Scroll>
      </div>
    );
  }
}
export default App;
