import React from "react";
function Button(props) {
    return (
        <button className="button">{props.value}</button>
    );
}
export default Button;