import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import App from './components/App';
import PeopleIndex from './components/PeopleIndex';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/people" component={PeopleIndex}/>
    </div>
  </Router>
);

export default Routes;