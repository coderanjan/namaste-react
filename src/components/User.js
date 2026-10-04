import { useState } from "react";
const User = ({ name }) => {
    const [count,setCount] = useState(0)
    const [count2] = useState(1)
  return (
    <div className="m-4 p-4 bg-gray-50 rounded-lg">
        <h1>count = {count}</h1>
        <h1>count = {count2}</h1>
      <h2>Name:{name}</h2>
      <h3>Location:Dehradun</h3>
      <h4>Contact: @anjan123</h4>
    </div>
  );
};

export default User;
