import { Link, useParams } from "react-router-dom";
import { useEffect, useCallback } from "react";
function Detail(){
    const {movieId} = useParams();
    //console.log(movieId);
    //movieId를 출력할 수 있음
    //const [loading, setLoading] = useState([]);
    //const [movies, setMovies] = useState([]);
    const getMovie = useCallback(async () => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`);
        const json = await response.json();
        console.log(json);
        
    }, [movieId]);

    useEffect(() => {
        getMovie();
    }, [getMovie]);
    return (
        <div>
            <h2>콘솔창에 세부정보 있음. 실험용 프로젝트라 귀찮아서 굳이 옮겨놓지는 않음.</h2>
            <Link to ="/"><h1>Detail</h1></Link>
        </div>
    );
}
export default Detail;
