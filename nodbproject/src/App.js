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
      favorites: [],
      newPlaylist: '',
      newPlatform: ''
    }
    this.addToFavorites = this.addToFavorites.bind(this);
    this.deleteFromPlaylist = this.deleteFromPlaylist.bind(this);
    this.movePlaylists = this.movePlaylists.bind(this);
    this.newPlaylist = this.newPlaylist.bind(this);
    this.newPlatform = this.newPlatform.bind(this);
  }

  componentDidMount(){
    axios.get('/api/playlists')
    .then(res => this.setState({playlists: res.data}));
  }

  addToFavorites(id,platform){
    axios.put(`/api/playlists/${id}`, {platformId: platform, id})
    .then(res => {
      this.setState({favorites: res.data[0], playlists: res.data[1]})
    });
  }

  movePlaylists(id,platform){
    axios.post('/api/playlists', {platformId: platform, id})
    .then(res => {
      this.setState({favorites: res.data[0], playlists: res.data[1]})
    })
  }

  deleteFromPlaylist(id,platform){
    axios.delete(`/api/playlists/${id}`)
    // console.log(id,platform)
    // .then(res => this.setState({playlists: res.data}))
  }

  newPlaylist(val){
    this.setState({
      newPlaylist: val,
    })
  }

  newPlatform(val){
    this.setState({
      newPlatform: val,
    })
  }

  render() {
    const { playlists,favorites,newPlatform,newPlaylist } = this.state;
    console.log(playlists)
    return (
      <div>
        <Header array={playlists} />
        <ListContainer array={playlists} favorite={this.addToFavorites} fav={favorites} deleteItem={this.deleteFromPlaylist} />
        <FavoritesContainer favorites={favorites} move={this.movePlaylists} />
        <Create array={playlists} newPlaylist={this.newPlaylist} newPlatform={this.newPlatform} />
      </div>
    );
  }
}

export default App;
