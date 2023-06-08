import React from "react";
import PrimaryButton from "./primaryButton/PrimaryButton";

const Form = () => {
  return (
    <div
      className=" py-8 md:px-12 px-5 pb-12"
      style={{
        backgroundImage: "url('/assets/images/form_bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="text-center  text-[var(--mainColor)] py-8">
        <h2 className="">TALK TO US</h2>
        <p className="">
          Leave your details below and we’ll contact you to discuss purchasing
          NAUT!
        </p>
      </div>
      <div className="flex flex-wrap justify-between gap-x-8  text-[#8B2AD3]">
        <div className="md:w-[50%] w-full">
          <label htmlFor="firstName"> First Name</label>
          <input
            type="text"
            placeholder="Enter first Name"
            className="w-full p-2 placeholder-[#2D004E] text-black "
          />
        </div>
        <div className="md:w-[40%] w-full ">
          <label htmlFor="lastName"> Last Name</label>
          <input
            type="text"
            placeholder="Enter last Name"
            className="w-full p-2 placeholder-[#2D004E] text-black"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-x-8 text-[#8B2AD3]">
        <div className="md:w-[50%] w-full flex gap-x-[10%]">
          <div className=" w-[30%] ">
            <label htmlFor="firstName" className="lg:whitespace-nowrap">
              {" "}
              country Code
            </label>
            <select
              name="hall"
              id="hall"
              defaultValue="code"
              className="w-full p-2 text-[#2D004E] outline-none"
            >
              <option value="sfhisd ">code</option>
              <option value="one ">one</option>
              <option value="teo ">two</option>
              <option value="sfhisd ">40989</option>
              <option value="sfhisd ">509890</option>
            </select>
          </div>
          <div className=" md:w-[60%] w-full ">
            <label htmlFor="firstName"> Contact Number</label>
            <input
              type="text"
              placeholder="Enter first Name"
              className="w-full p-2 placeholder-[#2D004E] text-black"
            />
          </div>
        </div>
        <div className="md:w-[40%] w-full">
          <label htmlFor="firstName"> Best Time To Contact</label>
          <select
            name="hall"
            id="hall"
            defaultValue="code"
            className="w-full p-2 text-[#2D004E] outline-none"
          >
            <option value="one">Select a time to contact</option>
            <option value="one">200</option>
            <option value="one">30989</option>
            <option value="one">40989</option>
            <option value="one">509890</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-x-8 text-[#8B2AD3]">
        <div className="md:w-[50%] w-full ">
          <label htmlFor="firstName">Investment Budget</label>
          <select
            name="hall"
            id="hall"
            defaultValue="Initial value"
            className="w-full p-2 text-[#2D004E] outline-none"
          >
            <option value="two">Enter investment budget</option>
            <option value="two">200</option>
            <option value="two">30989</option>
            <option value="two">40989</option>
            <option value="two">509890</option>
          </select>
        </div>
        <div className="md:w-[40%] w-full flex items-end md:justify-start justify-center  ">
          <div className="w-[150px] md:py-0 py-8">
            <PrimaryButton mixcolora={"#180139"} mixcolorb={"#180139"}>
              <button className="p-2 px-3 text-white">SUBMIT</button>
            </PrimaryButton>
          </div>
        </div>
        <div className="flex py-8">
          {" "}
          <input type="checkbox" className="" />
          <p className="pl-3 text-[#CCB5FF]">
            By submitting this form you agree to our Terms and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;

{
}
