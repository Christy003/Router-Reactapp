import * as React from "react";
interface Labelprops{
    label1:string
}

function Label(props:Labelprops): JSX.Element {
    const {label1}=props;
    return (
        <label > {label1}</label>
    );
}
export default Label;