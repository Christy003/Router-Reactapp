import * as React from "react";
type props = {
   id: string,
   type: string,
   placeholder: string,
}
function Input(props: {id: string,type: string,placeholder: string,}): JSX.Element {
   return (
      <input id={props.id} type={props.type} placeholder={props.placeholder} />
   );
}
export default Input;