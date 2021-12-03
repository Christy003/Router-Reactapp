import *as React from "react";
interface Buttonprops{
    value:string;
}

 export function Button(props:Buttonprops): JSX.Element{
     const {value}=props;
    return(
        
        <button className="button">{value}</button>
    );  
        
}
