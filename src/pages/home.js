import React, { useState, useEffect } from "react";
import Movie from '../components/movie';

function Home(){
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
          {movies.map((movie) => <Movie 
           key={movie.id}
           //key는 react.js에서만, map안에서 component들을 render할 때 사용한다.
           cnt={cnt}
           id={movie.id}
           coverimg={movie.medium_cover_image} 
           rating={movie.rating}
           title={movie.title}
           summary={movie.summary}
           genres={movie.genres}
           />)}
        </div>
      )};
    </div>
  );
}

export default Home;