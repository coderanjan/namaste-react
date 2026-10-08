import { useState } from "react";
import Submit from "./Submit";
const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  return !submitted ? (
    <div className="bg-gray-50 m-10">
      <div className=" flex flex-col items-center">
        <h1 className="text-3xl text-gray-900">Contact us </h1>
        <h2 className="text-gray-500 m-2">We'd love to hear from you</h2>
      </div>
      <div className="flex justify-between m-10">
        <div className=" w-5/12 p-10 rounded-xl">
          <h1 className="text-center text-3xl py-5">Get in Touch</h1>
          <p className="py-2">
            <span className="text-gray-900 text-lg">Email</span> :{" "}
            <span className="text-gray-500 m-2">hello@freshcart.com</span>
          </p>
          <p className="py-2">
            <span className="text-gray-900 text-lg">Phone</span> :{" "}
            <span className="text-gray-500">+977 9801234567</span>
          </p>
          <p className="py-2">
            <span className="text-gray-900 text-lg">Address</span> :{" "}
            <span className="text-gray-500">: Kathmandu, Nepal</span>
          </p>
          <p className="py-2">
            <span className="text-gray-900 text-lg">Working Hours</span> :{" "}
            <span className="text-gray-500">Mon – Sun, 9:00 AM – 9:00 PM</span>
          </p>
        </div>
        <div className="w-5/12 p-10 rounded-xl">
          <h1 className="text-center text-3xl py-5">Send us a message</h1>
          <div className="py-2">
            <label>Name</label>
            <input
              type="text"
              className=" focus:outline-none  border  border-gray-300 focus:ring-2 focus:ring-orange-400 rounded-md w-full my-2 p-2"
            />
          </div>
          <div className="py-2">
            <label>Email</label>
            <input
              type="email"
              className="focus:outline-none border  border-gray-300 focus:ring-2 focus:ring-orange-400 rounded-md w-full my-2 p-2"
            />
          </div>
          <div className="py-2">
            <label>Subject</label>
            <input
              type="text"
              className="focus:outline-none border  border-gray-300 focus:ring-2 focus:ring-orange-400 rounded-md w-full my-2 p-2"
            />
          </div>
          <div className="py-2">
            <label> message</label>
            <textarea
              rows={5}
              cols={10}
              className="focus:outline-none border  border-gray-300 focus:ring-2 focus:ring-orange-400 rounded-md w-full my-2 p-2"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              onClick={()=>setSubmitted(true)}
              className=" py-2 p-5 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl"
            >
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Submit />
  );
};

export default Contact;
