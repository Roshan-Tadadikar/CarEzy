import React, { Component } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Confirmation from "./Confirmation";
import Success from "./Success";
export default class Start extends Component {
  state = {
    step: 1,
    budget: "",
    info1: "",
    brand: "",
  };
  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };
  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  // handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  //

  render() {
    const { step } = this.state;
    const { budget, info, brand } = this.state;
    const values = { budget, info, brand };
    switch (step) {
      case 1:
        return (
          <Step1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Step2
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirmation
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
      // do nothing
    }
  }
}
