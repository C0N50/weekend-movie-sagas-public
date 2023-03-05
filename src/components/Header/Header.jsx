import { useHistory } from "react-router-dom";
import './Header.css'

/**
 * @returns - Render of @Header component which is persitent throughout the application. Shows title and button to home page.s
 */
function Header() {
    const history = useHistory();

    /**
     * routes to @movieList component @homepage on click.
     */
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