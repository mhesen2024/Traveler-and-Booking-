import React from "react";
import Sort from "../molecules/sort";

export default function FilterTab({setSort}) {

  const handleSortChange = (e) => {
    setSort(e.target.value);    
  };

  return (
<div>
  <Sort handleSortChange={handleSortChange}/>
</div>
  );
}
