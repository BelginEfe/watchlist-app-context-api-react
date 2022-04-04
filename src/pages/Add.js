import {useState, useContext} from 'react';
import ResultCard from '../components/ResultCard';
import { GlobalContext } from '../contexts/GlobalState';

export const Add = () => {

    const {theme} = useContext(GlobalContext)
    
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const OnChange = (e) => {
      e.preventDefault();
      setQuery(e.target.value);

      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
      .then(res => res.json())
      .then(data => {
          if (!data.errors) {
              setResults(data.results)
          } else {
              setResults([])
          }
      })
    }

  return (
    <div>
        <div className="add-page">
            <div className="container">
                <div className="add-content">

                    <div className="input-wrapper">
                        <input
                        className={`${theme === 'dark' ? 'dark-input' : ''}`}
                        type="text"
                        placeholder='Search for a movie'
                        value={query}
                        onChange={OnChange}
                        />
                    </div>

                    {
                        results.length > 0 && (
                            <ul className='results'>
                                {results.map((movie, index) => (
                                    <li key={index}>
                                        <ResultCard movie={movie}/>
                                    </li>
                                ))}
                            </ul>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
