import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import './index.css';


// import HeadingComponent from './components/Heading'`
import Login from './components/Login';
// import SourceList from './components/table_Only/SourceList';
import SideBar from './components/SideBar';
import alltablesourcelist from './components/all_table/SourceList';
import AddData from './components/NewDataForm';
import sourcelistnew from './components/table_Only/Sourcelistnew';
import Tabledetailsnew from './components/all_table/Tabledetailsnew';
import ShowTable from './components/all_table/ShowTable';


function App() {

  const isLoggedIn = localStorage.getItem("token")

  // if (!isLoggedIn) {
  //   return (<Login />);
  // } else {
    return (
      <div className="App" style={{height: "100%", margin: 0}}>
        {/* <ToastContainer /> */}
          <SideBar />
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            {/* <Route exact path="/sourcelist" component={SourceList} /> */}
            <Route exact path="/alltablesourcelist" component={alltablesourcelist} />
            {/* <Route exact path="/tabledetails/:id" component={tabledetails} /> */}
            <Route exact path="/tabledetails/:dbname" component={Tabledetailsnew} />
            <Route exact path="/adddata" component={AddData} />
            <Route exact path="/tableonlysourcelist" component={sourcelistnew} />
            <Route exact path="/showtable/:dbname/:tablename" component={ShowTable} />

          </Switch>
        </Router>
      </div>
    );
  }
// }

export default App;
