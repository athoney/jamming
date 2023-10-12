import "./styles/searchbar.css";

export default function SearchBar() {
    return (
        <div className="SearchBar text-center">
            <form>
                <input className="form-control w-50 my-3 mx-auto" placeholder="Enter A Song, Album, or Artist" />
                <button type="submit" className="btn search-btn">Search Spotify</button>
            </form>
        </div>
    );
}