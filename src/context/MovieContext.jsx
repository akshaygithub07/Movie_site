import { createContext,useContext,useEffect,useState} from "react";

export const MovieContext = createContext()

export const useMovieContext = () =>useContext(MovieContext)

export const MovieProvider = ({children})=>{
  const [favourite, setFavourites] = useState([])

  useEffect( ()=> {
    const storedFavs = localStorage.getItem("favourites")

    if(storedFavs) setFavourites(JSON.parse(storedFavs))
  },[])

  useEffect(()=>{
    localStorage.setItem('favourites',JSON.stringify(favourite))
  },[favourite])

  const addToFavourites = (movie) =>{
    setFavourites(prev =>[...prev,movie])
  }
  const removeFromFavourites = (movieId) =>{
    setFavourites(prev=> prev.filter(movie =>movie.id !==movieId))
  }
  const isFavourite = (movieId) =>{
    return favourite.some(movie=>movie.id ===movieId)
  }

  const value = {
            favourite,
            addToFavourites,
            removeFromFavourites,
            isFavourite
  }

  return <MovieContext.Provider value = {value}>
     {children}
  </MovieContext.Provider>


}