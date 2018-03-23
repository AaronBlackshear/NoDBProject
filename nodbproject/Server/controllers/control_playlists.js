const axios = require('axios');

let playlist = [];
let favorites = [];

module.exports = {
    getPlaylists: (req, res) => {
        if(!playlist.length){
            axios
            .get(`https://api.rocketleaguestats.com/v1/data/playlists/?apikey=${process.env.API_KEY}`)
            .then(response => {
                playlist = response.data
                res.status(200).json(playlist)
            })
            .catch(response => res.status(500).json(response))
        }
        else{
            res.status(200).json(playlist)
        }
    },
    postPlaylists: (req,res) => {
        const { platformId,id } = req.body
        playlist.forEach((cur,ind) => {
            if(cur.platformId === platformId && cur.id === id){
                favorites.push(playlist.splice(ind,1))
            }
        });
        res.status(200).send([favorites, playlist]);
    }
}

