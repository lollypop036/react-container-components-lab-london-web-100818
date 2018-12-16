import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '24aad5517d294b9cab0f2a19640a2cbe';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Component {


state = {
    reviews: []
}



componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        this.setState({
          reviews: data.results
        })
      })
  }

render() {
    const movies = this.state.reviews
    return (
        <div className="latest-movie-reviews">
        <div className="review-list">
               { movies.map(movie => 
                    <MovieReviews movie={movie}/>
                
                )}
        </div>
        </div>
   
   )
}





}
export default LatestMovieReviewsContainer;