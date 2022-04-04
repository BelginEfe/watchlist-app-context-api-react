import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial values

const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
    watched:  localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
    theme: localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : 'light',
};

//create context

export const GlobalContext = createContext(initialState);

// provider component

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
        localStorage.setItem('watched', JSON.stringify(state.watched));
        localStorage.setItem('theme', JSON.stringify(state.theme));
    }, [state])

    // actions

    const addMovietoWatchList = movie => {
        dispatch({type : 'ADD_MOVIE_TO_WATCHLIST', payload : movie})
    }

    const removeMovieFromWatchlist = id => {
        dispatch({type : 'REMOVE_MOVIE_FROM_WATCHLIST', payload: id});
    }

    const addMovietoWatchedlist = movie => {
        dispatch({type : 'ADD_MOVIE_TO_WATCHEDLIST', payload: movie });
    }

    const removeMovieBacktoWatchlist = movie => {
        dispatch({type : 'REMOVE_MOVIE_BACK_TO_WATCHLIST', payload: movie})
    }

    const removeMovieFromWatchedlist = id => {
        dispatch({type : 'REMOVE_MOVIE_FROM_WATCHEDLIST', payload: id})
    }

    const changeTheme = () => {
        dispatch({type: 'CHANGE_THEME'})
    }


    return (
        <GlobalContext.Provider value={{
            watchlist: state.watchlist,
            watched: state.watched,
            theme: state.theme,
            addMovietoWatchList,
            removeMovieFromWatchlist,
            addMovietoWatchedlist,
            removeMovieBacktoWatchlist,
            removeMovieFromWatchedlist,
            changeTheme,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}