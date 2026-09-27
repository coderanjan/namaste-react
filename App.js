import React from "react"
import ReactDOM from "react-dom/client"


// const data = api.getData()
//react element
const jsxHeading = <h1 className="heading">namaste react using jsx</h1>


//react functional component
const HeadingComponent = ()=>(
    <div>
        
        <h1>namaste react functional component</h1>
    </div>

)
const number = 100000
// component composition
const HeadingComponent2 =()=> (
    <div>
        <h2>{console.log("asdkh")}</h2>
        {HeadingComponent()}
        <h1>namaste react functional component</h1>
    </div>

)
const elem = <span>React Element{<HeadingComponent2></HeadingComponent2>}</span>





const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(elem)
