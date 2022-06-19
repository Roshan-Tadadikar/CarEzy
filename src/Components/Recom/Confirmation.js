import React from "react";
const Confirmation = ({ prevStep, nextStep, values }) => {
  console.log(values);
  const { budget, info1, brand } = values;
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <div>
      <div className="bg-green-100">
        <button
          className="bg-blue-500 hover:bg-blue-700 
           font-bold py-2 px-4 rounded  "
          onClick={Previous}
        >
          Previos
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 
           font-bold py-2 px-4 rounded  "
          onClick={Continue}
        >
          Confirm and next
        </button>
      </div>
    </div>
  );
};
export default Confirmation;
