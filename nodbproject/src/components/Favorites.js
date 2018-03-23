import React, {Component} from 'react';
import './CSS/favorites.css';

export default class Favorites extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const { name,population,platformName,platformId,id,favorite } = this.props;
        return (
            
                <div className="favorites">
                {!favorite.length ? (<div />) : (
                    <div>
                    <h3>Playlist: {name}</h3>
                    <h3>Platform: {platformName}</h3>
                    <h3>Population: {population.players}</h3>
                    </div>
                )}
                </div>
           
        )
    }
}