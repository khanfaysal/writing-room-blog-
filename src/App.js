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
import ManageContent from "./components/DashboardArea/ManageContent/ManageContent";
// import Login from "./components/lib/Login";
// import PrivateRoute from "./components/lib/PrivateRoute";

// export const context = createContext()


function App() {
  // const [User,setUser]=useState({
  //   isSignedIn: true,
  //   email: '',
  //   password: '',
  //   error :''
  // })
//   const [contents, setContents] =useState ([]);
//   useEffect(() => {
//     fetch('http://localhost:5000/addContent')
//     .then(res => res.json())
//     .then(data => setContents(data))
//   },[])
  
  // const contextData = {
  //   User,
  //   setUser,
  // }
  return (
    // <context.provider >
    <Router>
      <Switch>
          <Route  path="/" exact component = {Home} />
          <Route path="/dashboard" component = {Dashboard}  />
          <Route path="/dashboard/uploadcontent" component = {UploadContent} />
          <Route path="/dashboard/managecontent" component = {ManageContent} />
          
      </Switch>
    </Router>
  //  </context.provider>
    
  );
}

export default App;
