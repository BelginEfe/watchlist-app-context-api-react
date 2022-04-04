import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import { MovieCard } from "../components/MovieCard";

export const WatchList = () => {
  const { watchlist, theme } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">

          <div className="header">
              <h1 className={`${theme === 'light' ? 'heading' : 'dark-header'}`}>My Watchlist</h1>

              <span className='count-pill'>
              {watchlist.length === 0 || 1 ? `${watchlist.length} movie` : `${watchlist.length} movies`}
              </span>
          </div>

        {
            watchlist.length > 0 ? (
                <div className="movie-grid">
            {
                watchlist.map(movie => (
                    <MovieCard movie={movie} type="watchlist"/>
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
