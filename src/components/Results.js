import "./styles/boxes.css";
import Song from "./Song";

export default function Results() {
    return (
        <div className="results">
            <h2 className="text-start p-2">Results</h2>
            <div className="song">

                <Song button="add"/>
                <Song button="add"/>
                <Song button="add"/>
                <Song button="add"/>

            </div>
        </div>
    )
}