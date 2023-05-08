import { useState } from "react";
import { DropdownItems } from "../../types";

function CategoryDropDown({items}: DropdownItems) {
  const [value, setValue] = useState<string>('');

  const handleChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };
 
  return (
 
    <div>
 
      <label>
 h
        <select value={value} onChange={handleChange}>
          {items?.map((item)=>
            <option value={item.id}>{item.name}</option>
          )}
        </select>
 
      </label>
 
      <p>We eat {value}!</p>
 
    </div>
    )
  }
  
  export default CategoryDropDown