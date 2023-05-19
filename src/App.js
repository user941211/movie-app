import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from "./pages/home";
import Detail from "./pages/detail";

function App() {
  return (
  <Router>
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/movie/:movieId" element={ <Detail /> } />
          <Route path="/register" element={ <h1>hello</h1> } />
      </Routes>
  </Router>
  )
}
//컴퍼넌트 밖과 안은 설정이 같아야 한다.
//router는 재실행을 막기 위해 a tag와 href를 자제한다.
export default App;
