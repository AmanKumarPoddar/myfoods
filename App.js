import React from "react";
import ReactDOM from "react-dom/client";
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "Hello from Sibling1"),
//     React.createElement("h2", {}, "Hello from Sibling2"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "Hello from Sibling1"),
//     React.createElement("h2", {}, "Hello from Sibling2"),
//   ]),
// ]);
//jsx- HTML-Like Syntax
//This is not a pure valid JavaScript. JS engine dont understand this
const jsxHeading = <h1 className="head">Namaste React using JSX</h1>;
console.log(jsxHeading);

const Title = () => {
  return <h1>Namaste JavaScript</h1>;
};
const title = <h1>Hello from Title React Element</h1>;

//Babel recognizes the functional component being rendered
const elem = <span>React Element</span>;
const HeadingComponent = () => {
  return (
    <div id="container">
      {/* <Title /> */}
      {title}
      <Title />
      <Title></Title>
      {Title()}
      <h2>Hello {elem}</h2>
      <h1 className="head">Namaste From react Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading); rendering JSX element
root.render(<HeadingComponent />); //rendering functional component
