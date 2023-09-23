import React from 'react';
import ReactPlayer from 'react-player';
import fluxoOperacao from 'assets/video/fluxoOperacao.mp4'

const Player = () => {
    return (
        <ReactPlayer
            url={fluxoOperacao}
            width="100%"
            height="100%"
            playing={true}
            loop
            muted
            playsinline
        />
    )
}

export default Player;