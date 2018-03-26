const axios = require('axios');

let playlist = [];
let favorites = [];
let deletedIndex = 0;
let newId = 50;

module.exports = {
    getPlaylists: (req, res) => {
        if(!playlist.length){
            axios
            .get(`https://api.rocketleaguestats.com/v1/data/playlists/?apikey=${process.env.API_KEY}`)
            .then(response => {
                playlist = response.data;
                res.status(200).json(playlist)
            })
            .catch(response => res.status(500).json(response))
        }
        else{
            res.status(200).json(playlist)
        }
    },
    postPlaylists: (req,res) => {
        if(favorites.length < 5){
            const { platformId,id } = req.body
            playlist.forEach((cur,ind) => {
                // console.log(cur)
            if(cur.platformId === platformId && cur.id === id){
                favorites.push(cur)
                playlist.splice(ind,1)
            }
        }
    )
        res.status(200).send([favorites, playlist]);
        }
    },
    movePlaylists: (req,res) => {
        const { platformId,id } = req.body
            favorites.forEach((cur,ind) => {
            if(cur.platformId === platformId && cur.id === id){              
                playlist.push(cur)
                favorites.splice(ind,1)
            }
            res.status(200).send([favorites, playlist]);
        })
    },
    addPlaylists: (req,res) => {
        const { name, platformId } = req.body;
        if(name === '' || platformId === ''){
            null
        }
        else{
            playlist.push({id: newId, name,platformId, population: {players: Math.floor(Math.random() * 500) + 1 }})
            newId++;
            res.status(200).json(playlist)
        }
    },
    deletePlaylists: (req,res) => {
        const { id,platformId } = req.params;
        var index = playlist.findIndex(list => list.id === parseInt(id) && list.platformId === parseInt(platformId))
        playlist.splice(index,1)
        res.status(200).json(playlist);
    }
}