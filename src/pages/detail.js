import { Link, useParams } from "react-router-dom";

function Detail(){
    const {movieId} = useParams();
    console.log(movieId);
    
    return <Link to ="/"><h1>Detail</h1></Link>;
}
export default Detail;