import { useState } from "react";
import { DropdownItems } from "../../types";
import {useParams} from "react-router-dom";

function CategoryDropDown({items, value, setValue}: DropdownItems) {
  const [dropdownValue, setDropdownValue] = useState<string>('')

  const handleChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label>
        <select required onChange={handleChange} className="dropdown_select">
          <option value={''}>Select Category</option>
          {items?.map((item)=>
            <option key={item.id} value={item.id}>{item.name}</option>
          )}
        </select>
      </label>
    </div>
    )
  }

  export default CategoryDropDown