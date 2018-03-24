const axios = require('axios');

let playlist = [];
let favorites = [];
let deletedIndex = 0;

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
        if(favorites.length < 5){
            const { platformId,id } = req.body
            playlist.forEach((cur,ind) => {
            if(cur.platformId === platformId && cur.id === id){
                favorites.push(cur)
                playlist.splice(ind,1)
            }
        });
        res.status(200).send([favorites, playlist]);
        }
    },
    movePlaylists: (req,res) => {
        const { id } = req.params
        const { platformId } = req.body
            playlist.forEach((cur,ind) => {
                console.log(cur);
            if(cur.platformId === platformId && cur.id === id){
                playlist.push(favorites.splice(ind,1))
            }
            res.status(200).send([favorites, playlist]);
        })
    },
    deletePlaylists: (req,res) => {
        const { id,platform } = req.params;
        playlist.map((cur) => {
            console.log(id,platform)
            // console.log(cur.id,cur.platformId,cur.id.toString() + cur.platformId.toString())
            // var string = cur.id.toString() + cur.platformId.toString();
            // var number = parseInt(string);
            if(+cur.id + +cur.platformId == id){
                // console.log(id,cur.platform)
            }
        })
        res.status(200).json(playlist);
    }
}


// var deleted = playlist.map((cur,ind) => {
//     var test = +cur.id + +cur.platformId;
//     var testIndex = playlist.findIndex(cur => cur === test)
//     var index = playlist.splice(testIndex,1)
//     console.log(index)
// })


// if(test === parseInt(id)){
//     var testIndex = playlist.findIndex(cur => cur === test)
// }