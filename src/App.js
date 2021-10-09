import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewNav from './components/NewNav';
import Login from './components/Login';
import { useStateValue } from './StateProvider';
import Home from './components/Home';
import Profile from './components/Profile';
import Analysis from './components/Analysis';
import Facesnap from './components/screens/Facesnap';
import Writeyourmood from './components/screens/Writeyourmood';
import Cognitive from './components/screens/Cognitive';
import Graphs from './components/screens/Graphs';
import './App.css';

function App() {
  const [check, setCheck] = useState(false);
  const [logged, setLogged] = useState(false);
  const [logger, setLogger] = useState(false);
  const [{ user }] = useStateValue();

  useEffect(() => {
    let ch = localStorage.getItem('user-state');
    setCheck(ch);
    if (check !== null) {
      setLogged(true);
    }
    if (user) {
      setLogger(true);
    }
  }, [logged, check, logger, user]);

  const Routing = () => {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/" exact component={Home} />
        <Route path="/Home" exact component={Home} />
        <Route path="/Profile" exact component={Profile} />
        <Route path="/Analysis" exact component={Analysis} />
        <Route path="/Writeyourmood" exact component={Writeyourmood} />
        <Route path="/CognitiveCorrections" exact component={Cognitive} />
        <Route path="/Facesnap" exact component={Facesnap} />
        <Route path="/Graphs" exact component={Graphs} />
      </Switch>
    );
  };

  // const {user} = useContext()
  return (
    <div className="App">
      {!logger && !check ? (
        <Login />
      ) : (
        <div className="main">
          <Router>
            <NewNav />
            <Routing />
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
