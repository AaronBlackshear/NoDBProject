import React, {Component} from 'react';
import './CSS/create.css';

export default function Create(props) {
    const { newPlaylist,newPlatform } = props;
    return (
        <div className="create">
            <h1 className="create-title">Create<br /> your<br /> own<br /> Playlist!</h1>
            <h3 className="playlist-head">Playlist:</h3>
            <input placeholder="Enter Playlist Name here..." className="input" onChange={e => newPlaylist(e.target.value)} onClick={() => {}} />
            <h3>Platform:</h3>
            <input placeholder="Enter Platform Name here..." className="input" onChange={e => newPlatform(e.target.value)} />
            <br />
            <button>Submit</button>
        </div>
    )
}