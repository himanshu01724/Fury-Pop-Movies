import React,{useState,useEffect} from 'react'
export default function useMovies(query){


const api_key = process.env.REACT_APP_API_KEY;
const [movies, setMovies] = useState([]);
const [isLoading,setIsLoading] = useState(false)

    useEffect(()=>{
        fetchMovieData()
      },[query])
      
      async function fetchMovieData(){
        try{
          setIsLoading(true)
          const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${api_key}&s=${query}`)
          if(!response.ok){
            throw new Error('Network Error While Processing Your request')
          }
          const data = await response.json()
          if(query.length < 3)
          { setMovies([])
            setIsLoading(false)
            return
          }
          setMovies(data.Search)
          setIsLoading(false)
        }
        catch(error){
          console.error(error)
        }
      }
      
    return(
            {movies,isLoading}
    )
}