
// useFilter hook

import { useEffect, useState } from "react";

export function useFilter(data, searchString) {
  const [filterData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(data.filter((item) => item === searchString));
  }, [data, searchString]);
  return filterData;
}
