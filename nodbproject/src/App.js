import React, { Component } from 'react';
import axios from 'axios';
import Create from './components/Create';
import Header from './components/Header';
import ListContainer from './components/ListContainer';
import FavoritesContainer from './components/FavoritesContainer';


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
    .then(res => {
      this.setState({favorites: res.data[0], playlists: res.data[1]})
    });

    
  }

  render() {
    const { playlists,favorites } = this.state;
    return (
      <div>
        <Header array={playlists} />
        <ListContainer array={playlists} favorite={this.addToFavorites} />
        <FavoritesContainer favorites={favorites} />
        <Create array={playlists} />
      </div>
    );
  }
}

export default App;
