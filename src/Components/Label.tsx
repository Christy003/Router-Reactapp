import * as React from "react";

function Label(props:{label1:string}): JSX.Element {
    return (
        <label > {props.label1}</label>
    );
}
export default Label;