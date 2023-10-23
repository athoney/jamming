import "./styles/boxes.css";
import Song from "./Song";

export default function Results(props) {
    function handleClick(e) {
        const id = e.target.parentElement.parentElement.id;
        console.log(id);
        console.log(props.data[id]);
        props.addToPlayList(props.data[id]);
    }
    return (
        <div className="results">
            <h2 className="text-start p-2">Results</h2>
            <div className="song">
                {props.data.map((song, index) => {
                    return <Song button="add" song={song} key={index} handleClick={handleClick} />;
                })}

            </div>
        </div>
    )
}