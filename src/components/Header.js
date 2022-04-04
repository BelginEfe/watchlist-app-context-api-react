import {useContext} from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalState";

export const Header = () => {

    const {changeTheme} = useContext(GlobalContext);

  return (
    <header>
      <div className="container">

        <div className="inner-content">
          <div className="brand">
            <Link to="/">WatchList</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Watch List</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/add" className="btn">
                + Add
              </Link>
            </li>
          </ul>

          <button
          onClick={() => changeTheme()}
          className="header-icon">
          <i className="fa-fw fa fa-moon fa-2x"></i>
          </button>
        </div>

      </div>
    </header>
  );
};
