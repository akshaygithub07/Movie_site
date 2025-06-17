

import MovieCard from './components/MovieCard'
import Favourite from './pages/Favourites';
import Home from "./pages/Home"
import {Routes,Route} from "react-router-dom"
import NavBar from './components/NavBar';
import { MovieProvider } from './context/MovieContext';
import "./css/App.css"

function App() {


  return (
    <MovieProvider>

      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/favourites" element = {<Favourite/>} />
      </Routes>

    </main>

    </MovieProvider>

  );
}



export default App;