const express = require('express');
const bodyParser = require('body-parser')
const app = express('');
const port = 3001;

app.use(bodyParser.json());

const ctrlPlayers = require('./controllers/control-players');

app.get('/api/player/', ctrlPlayers.getPlayers);
// app.post('/api/player', ctrlPlayers.postPlayers);
// app.put('/api/player?=unique_id', ctrlPlayers.putPlayers);
// app.delete('/api/player', ctrlPlayers.deletePlayers);

app.listen(port, () => console.log(`Port ${port} is listening!`))