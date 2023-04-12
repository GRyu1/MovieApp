import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({medium_cover_image , title, summary , genres, id }){
    return <div>
    <img src={medium_cover_image}/>
    <h2><Link to={`/moive/${id}`}> {title} </Link> </h2>
    <p>{summary.length>150? summary.slice(0,150)+"....." : summary}</p>
    <ul>
      {genres.map((genre)=>(
        <li key={genre}>{genre}</li>
      ))}
    </ul>
    </div>
}

Movie.propTypes = {
    medium_cover_image : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
    id : PropTypes.number.isRequired
};


export default Movie;