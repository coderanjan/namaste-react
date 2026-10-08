// import UserContext from "../utils/UserContext";
// import User from "./User";
// import UserClass from "./UserClass";
// import { Component } from "react";
// // const About = () => {
// //   return (
// //     <div>
// //       <h1>about</h1>
// //       <h2>This is namaste react web series</h2>
// //       {/* <User name="anjan pajiyar function" /> */}
// //       <UserClass name="anjan pajiyar class" location="dehradun class" />
// //     </div>
// //   );
// // };

// class About extends Component {
//   constructor(props) {
//     super(props);
//     // console.log("parent constructor");
//   }

//   componentDidMount() {
//     // console.log("parent did mount");
//   }
//   render() {
//     // console.log("parent render");

//     return (
//       <div>
//         <div>
//           <UserContext.Consumer>
//             {({ loggedInUser }) => <h1>user : {loggedInUser}</h1>}
//           </UserContext.Consumer>
//         </div>
//         <h1>about</h1>
//         <h2>This is namaste react web series</h2>
//         {/* <User name="anjan pajiyar function" /> */}
//         <UserClass name="anjan pajiyar class" location="dehradun class" />
//       </div>
//     );
//   }
// }

// export default About;
// --------------------function component ----------------------------
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="bg-stone-50">
      <div className="flex flex-col  items-center gap-3 m-10">
        <h1 className="text-3xl text-zinc-900">About us </h1>
        <h2 className="text-zinc-500">Food grocerries delivered simply </h2>
        <p className="text-zinc-500">
          Discover your faviourite restaurants and shop for everyday grocereies
          - all from one convenient place
        </p>
      </div>
      <h1 className="text-2xl text-center text-zinc-900">what we offer</h1>
      <div className="flex gap-10 m-10  justify-center">
        <div className="border border-zinc-200 w-3/12 h-40 rounded-2xl p-5 cursor-pointer hover:animate-bounce">
          <h2 className="text-2xl m-2 text-zinc-900">Food delivery</h2>
          <p className="pl-2 text-zinc-500">
            order meals from your favorite restaurants
          </p>
        </div>
        <div className="border  border-zinc-200 w-3/12 h-40 rounded-2xl p-5 cursor-pointer hover:animate-bounce ">
          <h2 className="text-2xl m-2 text-zinc-900">grocery shopping</h2>
          <p className="pl-2 text-zinc-500">
            get your everyday essentials delivered to your doorstep
          </p>
        </div>
        <div className="border border-zinc-200 w-3/12 h-40 rounded-2xl p-5 cursor-pointer hover:animate-bounce">
          <h2 className="text-2xl m-2 text-zinc-900">easy ordering</h2>
          <p className="pl-2 text-zinc-500">
            simple , fast and convenient experiences
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl text-zinc-900">Our goal</h1>
        <p className="text-zinc-500 m-5">
          making everyday shopping and food delivery simple and convenient
        </p>
        <div className="flex gap-10 mb-19">
          <button className="p-3 rounded-xl bg-green-400 text-white cursor-pointer hover:bg-green-700 border-green-800">
            <Link to="/">Explore food</Link>
          </button>
          <button className="p-3 rounded-xl bg-green-400 text-white cursor-pointer hover:bg-green-700 border-green-800">
            <Link to="/grocery">Shop groceries</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
