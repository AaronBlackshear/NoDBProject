import React, { Component } from 'react';
import axios from 'axios';
import Create from './components/Create';
import Header from './components/Header';
import ListContainer from './components/ListContainer';
import FavoritesContainer from './components/FavoritesContainer';


class App extends Component {
  constructor() {
    super()
    this.state = {
      playlists: [],
      favorites: [],
      newPlaylist: '',
      newPlatform: ''
    }
    this.addToFavorites = this.addToFavorites.bind(this);
    this.deleteFromPlaylist = this.deleteFromPlaylist.bind(this);
    this.movePlaylists = this.movePlaylists.bind(this);
    this.addPlaylist = this.addPlaylist.bind(this);
    this.addPlatform = this.addPlatform.bind(this);
    this.createPlaylist = this.createPlaylist.bind(this);
  }

  componentDidMount() {
    axios.get('/api/playlists')
      .then(res => {
        this.setState({ playlists: res.data });
  
      })
  }
  addToFavorites(id, platformId) {
    axios.put(`/api/playlists/${id}`, { platformId, id })
      .then(res => {
        this.setState({ favorites: res.data[0], playlists: res.data[1] })
      });
  }

  movePlaylists(id, platformId) {
    axios.put(`/api/favorites/${id}`, { platformId, id })
      .then(res => {
        this.setState({ favorites: res.data[0], playlists: res.data[1] })
      })
  }

  deleteFromPlaylist(id, platformId) {
    axios.delete(`/api/playlists/${id}/${platformId}`)
      .then(res => this.setState({ playlists: res.data }))
  }

  createPlaylist(name, platformId) {
    axios.post('/api/playlists', { name, platformId })
      .then(res => {
        this.setState({ playlists: res.data })
      })
  }

  addPlaylist(val) {
    this.setState({
      newPlaylist: val,
    })
  }

  addPlatform(val) {
    this.setState({
      newPlatform: val,
    })
  }

  render() {
    const { playlists, favorites, newPlatform, newPlaylist } = this.state;
    return (
      <div>
        <Header />
        <ListContainer arr={playlists} favorite={this.addToFavorites} fav={favorites} deleteItem={this.deleteFromPlaylist} />
        <FavoritesContainer favorites={favorites} moveFav={this.movePlaylists} />
        <Create arr={playlists} newPlaylist={this.addPlaylist} newPlatform={this.addPlatform}
          create={this.createPlaylist} playlist={newPlaylist} platform={newPlatform} />
      </div>
    );
  }
}

export default App;
