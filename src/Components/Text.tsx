import *as React from "react";

function Text(props:{text:String}): JSX.Element {
    const newtext = <h3>{props.text}</h3>;
    return (
        newtext
    );
}
export default Text;