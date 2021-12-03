import * as React from "react";
type Inputprops = {
   id: string,
   type: string,
   placeholder: string,
}
export function Input(props:Inputprops){
   const {id,type,placeholder}=props;
   return (
      <input id={id} type={type} placeholder={placeholder} />
   );
}
