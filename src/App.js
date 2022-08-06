/** @format */
import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id : 'id1'
        },
        {
          name: 'Dracula',
          id : 'id2'
        },
        {
          name: 'Zombie',
          id : 'id3'
        },
        {
          name: 'MaMe',
          id : 'id4'
        },
      ],
    };
  }
  componentDidMount(){
  }
  render() {
    return <div className="App">
      {
        this.state.monsters.map(monster => <h1 key = {monster.id}>{monster.name}</h1>)
      }
    </div>;
  }
}
com
export default App;