import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sales_details from './pages/SalesDetails/sales_details';
import Customize_sales from './pages/CustomizeSales/customize_sales';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path='/' exact component={Sales_details} />
          <Route path='/customize_sales' exact component={Customize_sales} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
