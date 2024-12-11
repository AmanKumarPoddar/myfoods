import { useEffect, useState } from "react";

const User = ({ name, location, contact }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  useEffect(() => {
    //API CALL
    const timer = setInterval(() => {
      console.log("Use Effect IS OP");
    }, 1000);

    return () => {
      //Run as soon as we leave the component
      clearInterval(timer);
      console.log("Timer cleaned");
    };
  }, []);
  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: {contact}</h4>
    </div>
  );
};
export default User;
