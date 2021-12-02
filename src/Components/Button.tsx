import *as React from "react";
interface Buttonprops{
    value:string;
}

 function Button({value}:Buttonprops){
    return( 
        <button className="button">{value}</button>
        );
}
//export default Button;