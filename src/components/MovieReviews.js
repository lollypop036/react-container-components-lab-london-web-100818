import React  from 'react'

const MovieReviews = ({movie}) => {
return (
<div className="review">
    <h2>{movie.display_title}</h2>
    <h3>{movie.publication_date}</h3>
    <p>{movie.summary_short}</p>
</div>
)

}


export default MovieReviews;