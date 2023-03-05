import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';
import Header from '../Header/Header';


/**
 * Creates Renders and routes to @components in applicaiton.
 * @Header component is persitent throughout the application. Shows title and button to home page
 * @MovieList component is the application @homepage - It renders all the movies as button cards
 * @Details comonent displays details of any movie button clicked.
 */
function App() {

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
