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
      playlists: [],
      favorites: []
    }
    this.addToFavorites = this.addToFavorites.bind(this);
  }

  componentDidMount(){
    axios.get('/api/playlists')
    .then(res => this.setState({playlists: res.data}));
  }

  addToFavorites(id,platform){
    axios.put('/api/playlists', {platformId: platform, id})
    .then(res => this.setState({favorites: res.data}))
    console.log(this.state.favorites)
    console.log(this.state.playlists)
  }

  render() {
    const { playlists } = this.state;
    return (
      <div>
        <Header array={playlists} />
        <ListContainer array={playlists} favorite={this.addToFavorites} />
        <Favorites array={playlists} />
        <Create array={playlists} />
      </div>
    );
  }
}

export default App;
