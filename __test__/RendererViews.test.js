import React, { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ReactDOM from "react-dom";
import Enzyme, { shallow, render, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Company from "../src/views/Company";
import Home from "../src/views/Home";

Enzyme.configure({ adapter: new Adapter() });

describe("Renderer Views", () => {
  describe("when component call is successful", () => {
    test("Company should correctly", async () => {
      // Arrange
      const tag = <Company/>;

      // Act
      const wrapper = shallow(tag).dive();

      // Assert
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe("when component call is successful", () => {
    test("Home should correctly", async () => {
      // Arrange
      const tag = <Home/>;

      // Act
      const wrapper = shallow(tag).dive();

      // Assert
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
