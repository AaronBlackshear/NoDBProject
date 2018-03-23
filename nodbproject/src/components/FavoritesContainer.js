import React, {Component} from 'react';
import Favorites from './Favorites'
import './CSS/favorites.css';

export default class FavoritesContainer extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const { favorites } = this.props;
        console.log(favorites)
        let favoritesList = favorites.map((cur,ind) => {
            if(cur.platformId === 1){
                return <Favorites key={ind} name={cur.name} platformName={'XBOX One'} platformId={cur.platformId}  population={cur.population} id={cur.id} favorite={favorites} /> 
            }
            else if(cur.platformId === 2){
                return <Favorites key={ind} name={cur.name} platformName={'Play Station 4'} platformId={cur.platformId} population={cur.population} id={cur.id} favorite={favorites} /> 
            }
            else{
                return <Favorites key={ind} name={cur.name} platformName={'Steam'} platformId={cur.platformId} population={cur.population} id={cur.id} favorite={favorites} /> 
            }
        })

        return (
            <div className="favoritesBar">
                {favoritesList}
            </div>
        )
    }
}