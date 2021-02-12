import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return <div>{this.props.movies.map((element, index) => <MovieCard key={`Movie Title ${index + 1}`} movie={element}/>)}</div>
  }
}

export default MovieList;