import React from 'react';
import {Button} from './Button';
import Label from './Label';
import {Input} from './Input';
import './../App.css';
export function Login(): JSX.Element {
    return (
        <div className="Login">
            <Label label1="Username:"/><br/>
            <Input id="username" type="text" placeholder="Username" /><br/><br/>
            <Label label1="Password:"/><br/>
            <Input id="password" type="password" placeholder="Password" />
            <Button value="Submit" />
        </div>
    );
}
