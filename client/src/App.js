import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Pages - Customer and Admin
// Customer
import CustomerMain from './Pages/Customer/Main'

// Admin
import AdminLogin from './Pages/Admin/Login'
import AdminMain from './Pages/Admin/Main'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* level 1 routes */}
          <Route exact path="/">
            <CustomerMain />
          </Route>
          <Route exact path="/admin">
            <AdminLogin />
          </Route>


          {/* level 2 routes */}
          <Route exact path="/admin/dashboard">
            <AdminMain />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
