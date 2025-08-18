
// useCase hook

import { useEffect, useState } from "react";

export function useCase(msg) {
  const [newSt, setNewSt] = useState(msg);

  useEffect(() => {
    let arr = msg
      .split(" ")
      .map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      );
    setNewSt(arr.join(" "));
  }, [msg]);

  return newSt;
}
