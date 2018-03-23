const axios = require('axios');

module.exports = {
    getPlaylists: (req, res) => {
        axios
        .get('https://api.rocketleaguestats.com/v1/data/playlists/?apikey=YPRYIEEQ6N74M3OM1QLHYDGRP0IH3LV9')
        .then(response => {
            res.status(200).json(response.data)})
        .catch(response => res.status(500).send(response))
    },
    // postPlaylists: () => {

    // }
}