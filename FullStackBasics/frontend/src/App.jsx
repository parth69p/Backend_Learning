import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'
function App() {
  // const [count, setCount] = useState(0)
const [jokes, setJokes] = useState([])
useEffect(()=>{
  axios.get('/api/jokes')
  .then((response)=>{
    setJokes(response.data)
  }) // standardized way of fetching data from backend
  .catch((error)=>{
    console.log(error)
  })
  console.log(jokes)
},[])
  return (
    <>
       <h1>Chai Aur Fullstack Also on Youtube</h1>
    <p>Jokes : {jokes.length}</p>

    {
      jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.joke}</h3>
        </div>
      ))
    }
   </>
  )
}

export default App
