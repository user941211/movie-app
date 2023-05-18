import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMoveis] = useState([]);
  const getMovies = async () => {
    /*const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    )
    const json = await response.json();
    밑의 코드와 동일함.*/
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();

    setMoveis(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);
  var cnt=0;
  
  //console.log(movies);
  //json.data.movies가 영화내용 배열
  //then은 요즘 사용안하기에 async-await를 사용한다.
  return (
    <div>
      {loading ? (
      <h1>로딩중...</h1>
      ) : (
        <div>
          <h1>아래 항목은 영화 평점 8.5이상만 나오게 했음.</h1>
          <h1>평점 변경시에는 위쪽에 fetch 주소창에 minimum_rating=8.5를 바꾸면 됨</h1>
          {movies.map((movie) => (
            <div className="naemo" key={movie.id}>
              <h2>{++cnt}번 {movie.title} {movie.rating}점</h2>
              <p>{movie.summary}</p>
            </div>
          ))}
        </div>
      )};
    </div>
  );
}

export default App;
