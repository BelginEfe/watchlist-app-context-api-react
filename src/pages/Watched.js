import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import {MovieCard} from '../components/MovieCard';

export const Watched = () => {

  const { watched, theme } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">

          <div className="header">
              <h1 className={`${theme === 'light' ? 'heading' : 'dark-header'}`}>My Watched List</h1>

              <span className='count-pill'>
                {watched.length === 0 || 1 ? `${watched.length} movie` : `${watched.length} movies`}
              </span>
          </div>

        {
            watched.length > 0 ? (
                <div className="movie-grid">
            {
                watched.map(movie => (
                    <MovieCard movie={movie} type="watched"/>
                ))
            }
        </div>
            ) : (
                <h2 className="no-movies">No movies in here, add some!</h2>
            )
        }
      </div>
    </div>
  );
};
