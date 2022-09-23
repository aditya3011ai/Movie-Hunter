import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/Head/Head";
import MovieList from "./components/movielist/MovieList";
import Movie from "./pages/movieDetail/Movie";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/movie/:id" element={<Movie/>} exact />
          <Route path="/movies/:type" element={<MovieList/>} exact />
          <Route path="*" element={<h1>Page not Found!</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
