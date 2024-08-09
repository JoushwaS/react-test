import React from "react";
import { Field, ErrorMessage } from "formik";

const Step1: React.FC = () => (
  <div className="space-y-4">
    <div className="flex flex-row ">
      <label htmlFor="name" className="block p-4 text-gray-700">
        Name:
      </label>
      <div className="flex flex-col w-full">
        <Field
          name="name"
          type="text"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
        <ErrorMessage
          name="name"
          component="h1"
          className="text-red-500 text-sm  mt-2  text-left"
        />
      </div>
    </div>

    <div className="flex flex-row ">
      <label htmlFor="email" className="  p-4 block text-gray-700">
        Email:
      </label>
      <div className="flex flex-col w-full">
        <Field
          name="email"
          type="email"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
        <ErrorMessage
          name="email"
          component="div"
          className="text-red-500 text-sm mt-2  text-left"
        />
      </div>
    </div>
  </div>
);

export default Step1;
