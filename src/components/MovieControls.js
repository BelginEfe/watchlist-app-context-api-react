import React, {useContext} from 'react';
import { GlobalContext } from '../contexts/GlobalState';

export const MovieControls = ({movie, type}) => {

    const {removeMovieFromWatchlist, addMovietoWatchedlist, removeMovieBacktoWatchlist, removeMovieFromWatchedlist } = useContext(GlobalContext);
    return (
        <div>
            <div className="inner-card-controls">
                {
                    type === 'watchlist' ? (
                        <>
                        <button
                        onClick={() => addMovietoWatchedlist(movie)}
                        className="ctrl-btn">
                            <i className="fa-fw far fa-eye"></i>
                        </button>

                        <button
                        onClick={() => removeMovieFromWatchlist(movie.id)}
                        className="ctrl-btn">
                            <i className="fa-fw fa fa-times"></i>
                        </button>
                        </>
                    ) :

                    type === 'watched' ? (
                        <>

                        <button
                        onClick={() => removeMovieBacktoWatchlist(movie)}
                        className="ctrl-btn">
                            <i className="fa-fw far fa-eye-slash"></i>
                        </button>

                        <button
                        onClick={() => removeMovieFromWatchedlist(movie.id)}
                        className="ctrl-btn">
                            <i className="fa-fw fa fa-times"></i>
                        </button>

                        </>

                    ) : ''
                }
            </div>
        </div>
    )
}
