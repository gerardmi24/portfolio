import './App.css';
import {Switch, Route} from 'react-router-dom';
import Welcome from './Welcome';
import Projects from './Projects';
import Skills from './Skills';
import Nav from './Nav';
import Footer from './Footer';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Welcome />
          {/* <Footer /> */}
        </Route>
        <Route exact path="/projects">
          <Nav />
          <Projects />
          <Footer />
        </Route>
        <Route exact path="/skills">
          <Nav />
          <Skills />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
