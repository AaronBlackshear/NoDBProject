const axios = require('axios');

let players = [];
let id = 0;

module.exports = {
    getPlayers: (req,res) => {
        if(!players){
            // axios.get('https://api.rocketleaguestats.com/v1/data/platforms/?apikey=YPRYIEEQ6N74M3OM1QLHYDGRP0IH3LV9')
            // .then(res => {
            //     players = res.platform.name
            //     console.log(players)
            // })
            // .status(200).send(res)
            console.log('test')
        }
        axios.get('https://api.rocketleaguestats.com/v1/data/platforms/?apikey=YPRYIEEQ6N74M3OM1QLHYDGRP0IH3LV9')
            .then(res => {
                players = res.data.platform
                console.log(players)
            })
            .status(200).send(res)
    }

}