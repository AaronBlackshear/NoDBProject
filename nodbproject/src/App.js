import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  constructor(){
    super()
    this.state = {
      players: []
    }
  }

  componentDidMount(){
    axios.get('/api/player/')
    .then(res => this.setState({players: res.data.avatar}))
    console.log(this.state.players)
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
