import React, { Component } from 'react';
import Playlists from './Playlists';
import './CSS/listcontainer.css';

export default function ListContainer(props) {
    return (
        <div>
            <Playlists array={props.array} />
        </div>
    )
}