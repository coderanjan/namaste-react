import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
// const About = () => {
//   return (
//     <div>
//       <h1>about</h1>
//       <h2>This is namaste react web series</h2>
//       {/* <User name="anjan pajiyar function" /> */}
//       <UserClass name="anjan pajiyar class" location="dehradun class" />
//     </div>
//   );
// };

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent did mount");
  }
  render() {
    // console.log("parent render");

    return (
      <div>
        <h1>about</h1>
        <h2>This is namaste react web series</h2>
        {/* <User name="anjan pajiyar function" /> */}
        <UserClass name="anjan pajiyar class" location="dehradun class" />
      </div>
    );
  }
}

export default About;
