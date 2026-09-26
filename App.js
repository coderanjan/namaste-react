import React from "react"
import ReactDOM from "react-dom/client"
const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
    "div",
    { id: 'child1', key:'child1' },
    [React.createElement("h1", {key:'child3'}, "I'm namaste react"),React.createElement('h2',{key:'child4'},"I'm h2 tag")]
  ),React.createElement(
    "div",
    { id: 'child2', key:'child2' },
    [React.createElement("h1", {key:'child5'}, "I'm tag"),React.createElement('h2',{key:'child6'},"I'm h2 tag")]
  ),
  ]
);

console.log(parent);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
