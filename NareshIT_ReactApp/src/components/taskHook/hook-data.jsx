// hook-data.jsx

import { useEffect } from "react";
import { useSort } from "../../hooks/use-sort";
import { useFilter } from "../../hooks/use-filter";
import { useCase } from "../../hooks/use-casestring";

const dataItems = ["Apple", "Ball", "Cat", "Donkey","Eagle"];
export function HooksData() {
  const data = useSort(dataItems);
  const desData = useSort(dataItems, true);

  const filt = useFilter(dataItems, "Apple");
  const unFilt = useFilter(dataItems, "");

  const caseM = useCase("welCOme to rEaCt");

  useEffect(() => {
    console.log(data);
    console.log(filt);
    console.log(unFilt);
    console.log(caseM);
   
  }, []);
  return (
    <div className="container-fluid mt-5">
      <div className="text-center row ">
        <div className="col-12 col-sm-6 border border-1 rounded p-3 ">
          <h3>Sorted Data in Ascending</h3>
          <ul style={{ listStyle: "none" }}>
            {data.map((item) => (
              <li key={item} className="fs-5">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className=" col-12 col-sm-6 border border-1 rounded p-3">
          <div className="fs-3 fw-medium">Sorted Data in Descending</div>
          <ul style={{ listStyle: "none" }}>
            {desData.map((item) => (
              <li key={item} className="fs-5">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row text-center mt-3 ">
        <div className="fs-3 fw-medium col-12 col-sm-6 border border-1 rounded p-3 ">
          <div className="fs-1">Filtered Data</div>
        <ul style={{ listStyle: "none" }}>
          {filt.map((item, i) => (
            <li key={i} className="fs-5">
              {item}
            </li>
          ))}
        </ul>
        </div>
        <div className="fs-3 fw-medium col-12 col-sm-6 border border-1 rounded p-3 "><div>Transformed Sentence</div>
        <span className="fs-5">{caseM}</span>
        </div>
      </div>
    </div>
  );
}