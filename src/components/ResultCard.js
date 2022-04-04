import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";

export const ResultCard = ({ movie }) => {
  const { addMovietoWatchList, watchlist, watched, theme } = useContext(GlobalContext);
  const storedMovie = watchlist.find((o) => o.id === movie.id);
  const watchedMovie = watched.find(o => o.id === movie.id);
  let watchlistDisabled = storedMovie || watchedMovie ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date?.substring(0, 4)}
          </h4>
        </div>

        <div className="controls">
          <button
            disabled={watchlistDisabled}
            className='btn'
            onClick={() => addMovietoWatchList(movie)}
          >
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
