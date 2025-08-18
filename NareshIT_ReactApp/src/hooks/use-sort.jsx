// useSort hook

import { useEffect, useState } from "react";

export function useSort(data, reverse = false) {
  const [sort, setSort] = useState([]);
  useEffect(() => {
    let copyArr = [...data];

  setSort([...copyArr.sort((a,b)=>a.localeCompare(b))]);
  }, [data]);

  return reverse ? [...sort].reverse() : sort;
}

