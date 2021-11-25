import React from 'react';
import Button from './Button';
import Label from './Label';
import Input from './Input';
import './../App.css';
function Login(props) {
    return (
        <div className="Login">
            <Label label1="Username:"/><br/>
            <Input id="username" type="text" Placeholder="Username" /><br/><br/>
            <Label label1="Password:"/><br/>
            <Input id="password" type="password" Placeholder="Password" />
            <Button value="Submit" />
        </div>
    );
}

export default Login;