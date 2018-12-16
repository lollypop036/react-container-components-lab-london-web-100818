import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '24aad5517d294b9cab0f2a19640a2cbe';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

 class SearchableMovieReviewsContainer extends React.Component {

            state = {
                reviews: [],
                searchTerm: ''
            }
            
            
            
            // componentDidMount() {
            //     fetch(URL)
            //       .then(response => response.json())
            //       .then(data => {
            //         this.setState({
            //           reviews: data.results
            //         })
            //       })
            //   }


              handleChange = event => {
               
                this.setState({
                  searchTerm: event.target.value
                })
                
              }

              handleSubmit = (event) => {
                
                event.preventDefault();
                const keyword = this.state.searchTerm.replace(/ /g,"+")
                console.log(keyword)
             fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${keyword}&api-key=${NYT_API_KEY}`)
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

            <div className="searchable-movie-reviews">

            
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange}
          type="text"
          value={this.state.value}
          
        />
      </form>

            <div className="review-list">

                   { movies.map(movie => 
                        <MovieReviews movie={movie} />
                    
                    )}
            </div>
            </div>
       
       )
    }

    
}

export default SearchableMovieReviewsContainer;