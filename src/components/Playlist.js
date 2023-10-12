import "./styles/boxes.css";
import Song from "./Song";

export default function Playlist(){
    return (
        <div className="results">
            <h2 className="text-start p-2">Playlist</h2>
            <div className="song">

                <Song button="del"/>
                <Song button="del"/>

            </div>

            <button className="btn custom-btn my-3">Save to Spotify</button>
        </div>
    );
}