import React from 'react'
import './Movie.css'
const MovieCard = ({movie}) => {
  return (
    <div className='body'>
    <div className="bg">
      {/* <h1>{movie.Title}</h1> */}
    </div>
    <article>
  <figure><img src="https://assets.codepen.io/605876/person.png" alt=""/></figure>
  <h2>Mike's mindful morning</h2>
  <p>Course • Mindful Mike</p>
</article>

<h1>:hover</h1>
    </div>
  </div>
  )
}

export default MovieCard