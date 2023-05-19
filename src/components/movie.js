//import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, cnt, coverimg, rating, title, summary, genres  }){
    return (
        <div className="naemo">
            <h2>{++cnt}번</h2>
            <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
            <h3>{rating}점</h3>
            <img src={coverimg} alt={title} />
            <ul>
                {genres.map(g => (
                  <li key={g}>{g}</li>
                ))}
            </ul>
            <p>{summary}</p>
        </div>
    )
}

/*Movie.propTypes = {
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    rating : PropTypes.string.isRequired,
    //title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}*/
export default Movie;