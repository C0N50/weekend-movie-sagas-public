import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';
import Header from '../Header/Header';
import { useHistory } from "react-router-dom";

function App() {

  const history = useHistory();

  return (
    <div className="App">

      <Router>

        <Route path="/" exact>
          <Header />
          <MovieList />
        </Route>

        <Route path="/details" exact>
          <Header />
          <Details />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
