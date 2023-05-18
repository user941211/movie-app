import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMoveis] = useState([]);
  useEffect (() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    )
    .then((response) => response.json())
    .then(json => setMoveis(json.data.movies));
  }, []);
  console.log(movies);
//json.data.movies가 영화내용 배열
  return (
    <div>
      {loading ? <h1>로딩중...</h1> : null};

    </div>
  );
}

export default App;
