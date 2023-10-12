import React from "react";
import Cover from "./enchanted.png";

export default function Song(props) {
    let button;
    if (props.button === "add") {
        button = <button className="btn btn-outline-light align-middle">+</button>
    } else {
        button = <button className="btn btn-outline-light align-middle">-</button>
    }
    return (
        <div className="row text-start align-items-center pb-2">
            <div className="col-2 text-center">
                <img src={Cover} alt="album cover" width={48} height={48} />
            </div>
            <div className="col-8">
                <div>
                    <p className="songTitle mb-0">Enchanted</p>
                    <p className="mute mb-0"> Speak Now | Taylor Swift </p>
                </div>
            </div>
            <div className="col-2">
                {button}
            </div>
        </div>
    );
}