/**
 * <div id="parent">
 *   <div id ="child">
 *       <h1>I'm h1 tag</h1>
 *       <h2>I'm h2 tag</h2>
 *   </div>
 *   <div id ="child">
 *       <h1>I'm h1 tag</h1>
 *       <h2>I'm h2 tag</h2>
 *   </div>
 * </div>
 */
const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
    "div",
    { id: 'child1' },
    [React.createElement("h1", {}, "I'm tag"),React.createElement('h2',{},"I'm h2 tag")]
  ),React.createElement(
    "div",
    { id: 'child2' },
    [React.createElement("h1", {}, "I'm tag"),React.createElement('h2',{},"I'm h2 tag")]
  ),
  ]
);

//jsx

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("header"));

root.render(null);
