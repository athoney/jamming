import "./styles/boxes.css";
import Song from "./Song";

export default function Playlist(props) {

    function handleClick(e) {
        const id = e.target.parentElement.parentElement.id;
        console.log(id);
        props.removeFromPlaylist(id);
    }

    function handleChange(e) {
        props.changePlaylistName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const ids = props.data.songs.map((song) => {
            return "spotify:track:" + song.id
        })
        console.log(ids)
    }

    return (
        <div className="results">
            <form onSubmit={handleSubmit}>
                {/* <h2 className="text-start p-2">{props.data.playlist}</h2> */}
                <h2 className="text-start p-2"><input value={props.data.playlist} onChange={handleChange} /> </h2>
                <div className="song">
                    {props.data.songs.map((song, index) => {
                        return <Song button="del" song={song} key={index} handleClick={handleClick} />;
                    })}

                </div>

                <button className="btn custom-btn my-3" type="submit">Save to Spotify</button>
            </form>
        </div>
    );
}