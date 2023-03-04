import { HashRouter as Router, Route } from 'react-router-dom';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';
import { useHistory } from "react-router-dom";
import './Header.css'


function Header() {

    const history = useHistory();

    const handleGoToMovieList = () => {
        history.push("/");
      }

    return (
        <>
            <h1 onClick={handleGoToMovieList} className="title">CONFLIX</h1>
        </>
    )
}

export default Header;