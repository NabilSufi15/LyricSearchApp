import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import Lyrics from './components/tracks/Lyrics'

import { Provider } from './context';
import './App.css';

export class App extends Component {
  render() {
    return (
      <Provider>
         {/* what is router */}
        <Router>
          {/* what is react fragment */}
          <React.Fragment>
            <Navbar />
            <div className="container">
              {/* what is a switch? */}
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App
