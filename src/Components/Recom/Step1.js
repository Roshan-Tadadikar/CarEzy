import React from "react";

const Step1 = ({ nextStep, handleChange, values }) => {
  // for continue event listener
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <div className="bg-sky-500  border-2 mt-24">
      <h1>step 1</h1>
      <form>
        <label>
          budget
          <input
            type="text"
            value={values.budget}
            placeholder="budget"
            onChange={handleChange("budget")}
          />
        </label>
        <div className="bg-green-400">
          <button
            className="bg-blue-500 hover:bg-blue-700 
           font-bold py-2 px-4 rounded  "
          >
            Button
          </button>
        </div>
      </form>
    </div>
  );
};
export default Step1;
