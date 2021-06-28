import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/HomePage/Home/Home";
import Dashboard from "./components/DashboardArea/Dashboard/Dashboard";
import UploadContent from "./components/DashboardArea/UploadContent/UploadContent";
import AdminAdd from "./components/DashboardArea/AdminAdd/AdminAdd";

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/dashboard">
          <Dashboard />
        </Route>
      <Route path="/upcontent">
          <UploadContent />
        </Route>
      <Route path="/adminadd">
          <AdminAdd />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
