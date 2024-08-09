import React from "react";
import { Field, ErrorMessage } from "formik";
const Step3: React.FC = () => (
  <div className="space-y-4">
    <div className="flex flex-col ">
      <div className="flex flex-row">
        <label htmlFor="address" className=" p-4 block text-gray-700">
          Address:
        </label>
        <Field
          name="address"
          type="text"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <ErrorMessage
        name="address"
        component="h1"
        className="text-red-500 text-sm mx-20 mt-2  text-left"
      />
    </div>

    <div className="flex flex-col ">
      <div className="flex flex-row">
        <label htmlFor="city" className=" p-4 block text-gray-700">
          City:
        </label>
        <Field
          name="city"
          type="text"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <ErrorMessage
        name="city"
        component="div"
        className="text-red-500 text-sm mx-20 mt-2  text-left"
      />
    </div>
  </div>
);

export default Step3;
