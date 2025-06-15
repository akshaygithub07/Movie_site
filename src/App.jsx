

import MovieCard from './components/MovieCard'
import Favourite from './pages/Favourites';
import Home from "./pages/Home"
import {Routes,Route} from "react-router-dom"
import NavBar from './components/NavBar';
import "./css/App.css"

function App() {


  return (
    <div>

      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/favourites" element = {<Favourite/>} />
      </Routes>

    </main>

    </div>

  );
}



export default App;