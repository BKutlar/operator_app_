import React, { useState } from "react";
import CustomSelect from "./CustomSelect";
import './Fselect.css';

const languages = [
  {
    id: 0,
    label: "Test1",
  },
  {
    id: 1,
    label: "Test2",
  },
  {
    id: 2,
    label: "Test3",
  },
//   {
//     id: 3,
//     label: "GO",
//   },
//   {
//     id: 4,
//     label: "C#",
//   }
];

function SelectFilter() {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  return (
    <div className="app">
      {/* <h3>React Custom Dropdown</h3> */}
      <CustomSelect
        title="Select your skills:"
        value={selectedLanguages}
        onChange={(v) => setSelectedLanguages(v)}
        options={languages}
      />
    </div>
  );
}

export default SelectFilter;
