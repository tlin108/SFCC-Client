import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import App from './components/App';
import PeopleIndex from './components/PeopleIndex';
import PeopleShow from './components/PeopleShow';
import PeopleNew from './components/PeopleNew';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/people" component={PeopleIndex}/>
      <Route exact path="/people/new/" component={PeopleNew}/>
      <Route strict exact path="/people/:id" component={PeopleShow}/>
    </div>
  </Router>
);

export default Routes;