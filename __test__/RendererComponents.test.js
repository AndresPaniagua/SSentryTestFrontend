import React from "react";
import { mockReactRedux } from "mock-react-redux";
import { create, act } from "react-test-renderer";

import MainForm from "../src/components/Home/MainForm";
import RegisterForm from "../src/components/Company/RegisterForm";

import "regenerator-runtime/runtime";
import "core-js/stable";
import "react-redux";

describe("Renderer Components", () => {
  describe("Component of Company", () => {
    test("RegisterForm should correctly", async () => {
      // Arrange
      const mockState = {
        id: "1231243",
        identificationTypeId: "identificationTypeId",
        companyName: "companyName",
        identificationNumber: "identificationNumber",
        firstName: "firstName",
        secondName: "secondName",
        firstLastName: "firstLastName",
        secondLastName: "secondLastName",
        email: "email",
        allowCellphoneMessages: "allowCellphoneMessages",
        allowEmailMessages: "allowEmailMessages",
      };
      const tag = <RegisterForm />;
      const toCompare = ['Número de identificación', 'Razón social', 'Correo electrónico'];
      let root;
      let rootInstance;
      let props = [];
      let findAll;

      mockReactRedux().state({
        company: mockState,
      }); // Siempre se debe instanciar para Redux

      // Act
      act(() => {
        root = create(tag);
      });

      rootInstance = root.root;
      findAll = rootInstance.findAllByProps({ className: "form-label" });

      for(let index = 0; index < findAll.length; index++)
        props.push(findAll[index].children[0]);

      // Assert
      expect(root.toJSON()).toMatchSnapshot();
      expect(rootInstance.findAllByProps({ className: "form-label" }).length).toEqual(3);
      expect(props).toEqual(toCompare);
    });
  });


  describe("Component of Home", () => {
    test("MainForm should correctly", async () => {
      // Arrange
      const tag = <MainForm />;
      let root;
      let rootInstance;

      mockReactRedux().state({ }); // Siempre se debe instanciar para Redux

      // Act
      act(() => {
        root = create(tag);
      });

      rootInstance = root.root;

      // Assert
      expect(root.toJSON()).toMatchSnapshot();
      expect(rootInstance.findByProps({ className: "form-label" }).children).toEqual(['NIT']);
    });
  });
});
