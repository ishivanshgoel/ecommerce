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
import AddProduct from "./Pages/Admin/AddProduct"
import ManageCustomer from "./Pages/Admin/ManageCustomer"
import ModifyProduct from "./Pages/Admin/ModifyProduct"
import ManageOrder from "./Pages/Admin/ManageOrder"

const routes = require('./routes.json')

function App() {

  return (
    <div>
      <Router>
        <Switch>
          {/* level 1 routes */}
          <Route exact path={routes['customer']}>
            <CustomerMain />
          </Route>
          <Route exact path={routes['admin']}>
            <AdminLogin />
          </Route>


          {/* level 2 routes */}
          <Route exact path={routes['adminDashBoard']}>
            <AdminMain />
          </Route>
          <Route exact path={routes['adminProductAdd']}>
            <AddProduct />
          </Route>
          <Route exact path={routes['adminProductEdit']}>
            <ModifyProduct />
          </Route>
          <Route exact path={routes['adminManageCustomer']}>
            <ManageCustomer />
          </Route>
          <Route exact path={routes['adminManageOrder']}>
            <ManageOrder />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
