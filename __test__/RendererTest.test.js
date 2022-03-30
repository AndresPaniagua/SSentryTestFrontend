import TestRenderer from 'react-test-renderer';
import { create, act } from 'react-test-renderer';
import App from '../src/routes/App';
import { BrowserRouter as Router } from 'react-router-dom';

function MyComponent() {
  return (
    <div>
      <SubComponent foo="bar" />
      <p className="my">Hello</p>
    </div>
  );
}

function SubComponent() {
  return <p className="sub">Sub</p>;
}

describe("Renderer", () => {
  describe("when component call is successful", () => {
    test("should correctly", async () => {
      // Arrange
      const testRenderer = TestRenderer.create(<MyComponent />);
      const testInstance = testRenderer.root;

      // Act

      // Assert
      expect(testInstance.findByType(SubComponent).props.foo).toBe("bar");
      expect(testInstance.findByProps({ className: "sub" }).children).toEqual([ "Sub" ]);
    });
  });

  // describe("when component App call is successful", () => {
  //   test("Should correctly 2", async () => {
  //     // Arrange
  //     let root;

  //     // Act
  //     act(() => {
  //       root = create(<Router> <App /> </Router>);
  //     });

  //     // Assert
  //     expect(root.toJSON()).toMatchSnapshot();
  //   });
  // });
});
