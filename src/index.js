// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Pages/Home';
import Form from './Pages/Form';
import About from './Pages/About';

function App() {
  return (

    <Router>
      <Link to='/'> Home </Link><br />
      <Link to='/Form'> Login form </Link><br />
      <Link to='/About'> About  </Link>
      <hr />
      <Switch>
        <Route exact path="/"> <Home/> </Route>
        <Route path="/Form"><Form/></Route>
        <Route path="/About"><About/></Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

