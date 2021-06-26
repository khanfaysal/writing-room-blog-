import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/HomePage/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import UploadContent from "./components/UploadContent/UploadContent";

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
        <Route exact path="/">
          <Home />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
