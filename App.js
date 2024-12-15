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
//React.createElement way is the core -react way but now lets use JSX to simplify our task
//jsx- HTML-Like Syntax. JSX and React are different ,JSX is not a part of React
//This is not a pure valid JavaScript. JS engine dont understand this.JSX is transpiled by parcel or any bundler before it goes inside the js engine or the browser
const jsxHeading = <h1 className="head">Namaste React using JSX</h1>; //This line of code is converted to that like React.createElement()=>and babel(a compiler ) is doing this job
console.log(jsxHeading);

const Title = () => {
  return <h1>Namaste JavaScript</h1>;
};
const title = <h1>Hello from Title React Element</h1>;
const name = "Aman";

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
      <h2>From {name}</h2>
      <h1 className="head">Namaste From react Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading); rendering JSX element
root.render(<HeadingComponent />); //rendering functional component
