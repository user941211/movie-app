import { Link, useParams } from "react-router-dom";
import { useEffect, useCallback } from "react";
function Detail(){
    const {movieId} = useParams();
    //console.log(movieId);
    //movieId를 출력할 수 있음

    const getMovie = useCallback(async () => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`);
        const json = await response.json();
        console.log(json);
    }, [movieId]);

    useEffect(() => {
        getMovie();
    }, [getMovie]);
    return <Link to ="/"><h1>Detail</h1></Link>;
}
export default Detail;
