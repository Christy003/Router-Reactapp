import React from 'react';
import '../App.css';
import '../index.css';
 import Login from "../Components/Login";
import Text from'../Components/Text';
function Form(): JSX.Element {
    return (
        <div className="App">
       <Text text="Login Form"/>
            <Login/>
        </div>
    );
}
export default Form;