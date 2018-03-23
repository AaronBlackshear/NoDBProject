import React, { Component } from 'react';
import axios from 'axios';
import Create from './components/Create';
import Header from './components/Header';
import ListContainer from './components/ListContainer';
import Favorites from './components/Favorites';


class App extends Component {
  constructor(){
    super()
    this.state = {
      playlists: []
    }
  }

  componentDidMount(){
    axios.get('/api/playlists')
    .then(res => this.setState({playlists: res.data}));
  }

  render() {
    const { playlists } = this.state;
    console.log(playlists)
    // let playlistName = playlists.map((cur,ind) => {
    //   return <p key={ind}>{cur.name}</p>
    // })
    return (
      <div>
        <Header array={playlists} />
        <ListContainer array={playlists} />
        <Favorites array={playlists} />
        <Create array={playlists} />
      </div>
    );
  }
}

export default App;
