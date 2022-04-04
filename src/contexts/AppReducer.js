export default (state, action) => {
    switch (action.type) {

        case 'ADD_MOVIE_TO_WATCHLIST':
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            }

        case 'REMOVE_MOVIE_FROM_WATCHLIST':
            return {
                ...state,
                watchlist: state.watchlist.filter(movie => movie.id !== action.payload)
            }

        case 'ADD_MOVIE_TO_WATCHEDLIST':
            return {
                ...state,
                watchlist: state.watchlist.filter(movie => movie.id !== action.payload.id),
                watched: [action.payload, ...state.watched],
            }

        case 'REMOVE_MOVIE_BACK_TO_WATCHLIST':
            return {
                ...state,
                watched: state.watched.filter(movie => movie.id !== action.payload.id),
                watchlist: [action.payload, ...state.watchlist]
            }

        case 'REMOVE_MOVIE_FROM_WATCHEDLIST':
            return {
                ...state,
                watched: state.watched.filter(movie => movie.id !== action.payload)
            }

        case 'CHANGE_THEME':
            return {
                ...state,
                theme: state.theme !== 'light' ? 'light' : 'dark'
                
            }
        default:
            return state;
    }
}