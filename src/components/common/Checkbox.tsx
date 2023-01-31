import { useState } from "react";

const Checkbox = ({label} : {label:string}) => {

    const [isChecked , setIsChecked] = useState(false);
  return (
    <div>
        
<label>

    <input type="checkbox"/>
</label>
<div>{label}</div>

    </div>
  )
}


export default Checkbox;