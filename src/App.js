import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';


// import HeadingComponent from './components/Heading'`
import Login from './components/Login';
import SourceList from './components/table_Only/SourceList';
// import SourcesList from './components/SourceList';
import SideBar from './components/SideBar';
import tableonlysourcelist from './components/table_Only/SourceList';
import alltablesourcelist from './components/all_table/SourceList';
import tabledetails from './components/all_table/Tabledetails';


function App() {

  const isLoggedIn = localStorage.getItem("token")

  // if (!isLoggedIn) {
  //   return (<Login />);
  // } else {
    return (
      <div className="App">
        <ToastContainer />
        <Router>

          <SideBar />
          <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/sourcelist" component={SourceList} />
            <Route exact path="/tableonlysourcelist" component={tableonlysourcelist} />
            <Route exact path="/alltablesourcelist" component={alltablesourcelist} />
            <Route exact path="/tabledetails/:tablename" component={tabledetails} />
          </Switch>
        </Router>
      </div>
    );
  }
// }

export default App;
