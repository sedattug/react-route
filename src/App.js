import React from 'react';
import './App.css';
import Navigation from './Navigation';
import About from './About';
import Shop from './Shop';
import Slider from './Slider';
import ItemDetail from './ItemDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shop/:id" component={ItemDetail}/>
      </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <Jumbotron fluid>
  <Container>
<h1>Simple Route App</h1>
    <p>
      This is simple Route App
    </p>
    <Slider />
  </Container>
</Jumbotron>
);

export default App;
