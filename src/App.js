import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Profile from './components/Profile/Profile';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/profile/:id'  exact component={Profile} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
