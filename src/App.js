import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from "./pages/home";
import Detail from "./pages/detail";

function App() {
  return (
  <Router>
      <Routes>
          <Route path= {`${process.env.PUBLIC_URL}/`} element={ <Home /> } />
          <Route path= {`${process.env.PUBLIC_URL}/movie/:movieId`} element={ <Detail /> } />
          <Route path= {`${process.env.PUBLIC_URL}/register`} element={ <h1>hello</h1> } />
      </Routes>
  </Router>
  )
}
//컴퍼넌트 밖과 안은 설정이 같아야 한다.
//router는 재실행을 막기 위해 a tag와 href를 자제한다.
export default App;
//package.json에
//deploy랑 predeploy 와 homepage는 추가할것