require('dotenv').config();
const express = require('express');
const { json } = require('body-parser')
const app = express();
const port = 3001;

app.use(json());

const ctrlPlaylists = require("./controllers/control_playlists");

app.get("/api/playlists", ctrlPlaylists.getPlaylists);
// app.post('/api/playlists', ctrlPlaylists.postPlaylists);
app.post('/api/playlists', ctrlPlaylists.addPlaylists);
app.put('/api/playlists/:id', ctrlPlaylists.postPlaylists);
app.put('/api/playlists/:id', ctrlPlaylists.movePlaylists);
app.delete(`/api/playlists/:id/:platformId`, ctrlPlaylists.deletePlaylists);

app.listen(port, () => console.log(`Listening on port ${port}`))