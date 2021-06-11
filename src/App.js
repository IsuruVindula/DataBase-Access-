import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


// import HeadingComponent from './components/Heading'`
import Login from './components/Login';
import SourceList from './components/table_Only/SourceList';
import SideBar from './components/SideBar';
import tableonlysourcelist from './components/table_Only/SourceList';
import alltablesourcelist from './components/all_table/SourceList';
import tabledetails from './components/all_table/Tabledetails';
import AddData from './components/NewDataForm';


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
            <Route exact path="/v1/test/db/<db name>/table/tableonlysourcelist" component={tableonlysourcelist} />
            <Route exact path="/v1/test/db/alltablesourcelist" component={alltablesourcelist} />
            <Route exact path="/tabledetails/:id" component={tabledetails} />
            <Route exact path="/adddata" component={AddData} />
          </Switch>
        </Router>
      </div>
    );
  }
// }

export default App;
