import React, {Component} from 'react';
import './CSS/playlists.css';

export default class Playlists extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const { array } = this.props;

        let test = array.map((cur,ind) => {
            if(cur.platformId === 1){
                return <div className="playlistBox" key={ind}>
                    <h3>Playlist: {cur.name}</h3>
                    <h3>Platform: XBOX One</h3>
                    <h3>Population: {cur.population.players}</h3>
                </div>
            }
            else if(cur.platformId === 2){
                return <div className="playlistBox" key={ind}>
                    <h3>Playlist: {cur.name}</h3>
                    <h3>Platform: Play Station 4</h3>
                    <h3>Population: {cur.population.players}</h3>
                </div>
            }
            else{
                return <div className="playlistBox" key={ind}>
                <h3>Playlist: {cur.name}</h3>
                <h3>Platform: Steam</h3>
                <h3>Population: {cur.population.players}</h3>
            </div>
            }
        })

        return (
            <div className="Flex-Box">
                {test}
            </div>
        )
    }
}