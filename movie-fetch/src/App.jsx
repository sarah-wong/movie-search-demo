import { useState } from 'react'
import './App.css'
import MovieDisplay from './components/MovieDisplay'
import Form from './components/Form'


const API_KEY = '46b77f89'

function App() {
  
  const [movie, setMovie] = useState(null);

  async function getMovie(searchTerm){
    // 1. Fetch the data
    const response = await fetch(
      `https://omdbapi.com/?apikey=${API_KEY}&t=${searchTerm}`
    );
    
    // 2. Convert the data to json
    const data = await response.json();
    // console.log(data);
    
    // 3. Save the retrieved data to state
    setMovie(data);
  }

  return (
    <>
      <Form
        getMovie={getMovie}
      />
      <MovieDisplay
        movie={movie}
      />
    </>
  )
}

export default App
