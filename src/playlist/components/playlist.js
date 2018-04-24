import React, { Component } from 'react';
import Media from './media';
import './playlist.css';

class PlayList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const playlist = this.props.playlist.categories[0].playlist;
        return (
            <div className="Playlist">
                {
                    playlist.map((item) => {
                        return <Media {...item} key={item.id}/>
                    })
                }
            </div>
        )
    }
}

export default PlayList;
