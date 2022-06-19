import React from "react";
const Step2 = ({ prevStep, nextStep, handleChange, values }) => {
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
      <form>
        <label>
          info1
          <input
            type="text"
            value={values.info1}
            placeholder="info1"
            onChange={handleChange("info1")}
          />
        </label>

        <label>
          brand
          <input
            type="text"
            value={values.brand}
            placeholder="brand"
            onChange={handleChange("brand")}
          />
        </label>
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
            Next
          </button>
        </div>
      </form>
    </div>
  );
};
export default Step2;
