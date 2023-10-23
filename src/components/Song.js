import React from "react";

export default function Song(props) {
    let button;
    
    if (props.button === "add") {
        button = <button onClick={props.handleClick} className="btn btn-outline-light align-middle">+</button>
    } else {
        button = <button onClick={props.handleClick} className="btn btn-outline-light align-middle">-</button>
    }
    return (
        <div className="row text-start align-items-center pb-2" id={props.song.id}>
            <div className="col-2 text-center">
                <img src={require(`./images/${props.song.img}`)} alt="album cover" width={48} height={48} />
            </div>
            <div className="col-8">
                <div>
                    <p className="songTitle mb-0">{props.song.name}</p>
                    <p className="mute mb-0"> {props.song.album} | {props.song.artist} </p>
                </div>
            </div>
            <div className="col-2">
                {button}
            </div>
        </div>
    );
}