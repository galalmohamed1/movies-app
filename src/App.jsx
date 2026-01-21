import "./App.css";
import { BrowserRouter, Route,Routes } from "react-router";
import Header from "./components/Header";
import Movies from "./page/Movies";
import Tvshows from "./page/Tvshows";
import Favorite from "./page/Favorite";
import Home from "./page/Home";
import NotFound from "./page/NotFound";
import MovieDetails from './page/MovieDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container my-5 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie-app" element={<Movies />} />
            <Route path="/tv-show-app" element={<Tvshows />} />
            <Route path="/favorite-app" element={<Favorite />} />
            <Route path="/movie-details/:id" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
