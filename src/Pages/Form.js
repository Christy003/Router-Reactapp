import React from 'react';
import '../App.css';
import '../index.css'; import Login from "../Components/Login";
function Form(props) {
    return (
        <div className="App">
            <h1>Login form</h1>
            <Login/>
        </div>
    );
}
export default Form;