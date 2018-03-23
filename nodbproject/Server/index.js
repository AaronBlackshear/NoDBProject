const express = require('express');
const { json } = require('body-parser')
const app = express();
const port = 3001;

app.use(json());

const ctrlPlaylists = require("./controllers/control_playlists");

app.get("/api/playlists", ctrlPlaylists.getPlaylists);
// app.post('/api/playlists', ctrlPlaylists.postPlaylists);
// app.put('/api/player?=unique_id', ctrlPlayers.putPlayers);
// app.delete('/api/player', ctrlPlayers.deletePlayers);

app.listen(port, () => console.log(`Listening on port ${port}`))