import PropTypes from "prop-types";

function Movie({cnt, coverimg, rating, title, summary, genres  }){
    return (
        <div className="naemo">
            <h2>{++cnt}번 {title} {rating}점</h2>
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

Movie.propTypes = {
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    rating : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;