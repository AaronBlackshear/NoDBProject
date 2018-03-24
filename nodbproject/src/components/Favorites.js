import React, {Component} from 'react';
import './CSS/favorites.css';

export default class Favorites extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const { name,population,platformName,platformId,id,favorite,move } = this.props;
        return (
            
                <div className="favorites">
                {!favorite.length ? (<div />) : (
                    <div className="fav">
                    <h3>Playlist: {name}</h3>
                    <h3>Platform: {platformName}</h3>
                    <h3>Population: {population.players}</h3>
                    <button onClick={() => move(id,platformId)}>Remove</button>
                    </div>
                )}
                </div>
           
        )
    }
}