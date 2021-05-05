import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import {EmployeesComponent} from './app/components/employee-list.component'
import {EmployeeDetailsComponent} from './app/components/employee-details.component';

function App() {
  return (
    <>
      <Router>
        {/* <Navigation name=""/> */}
        <Switch>
          <Route path='/' exact component={EmployeesComponent}/>
        </Switch>
      </Router>
    </ >
  );
}

export default App;
