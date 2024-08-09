import React from "react";
import { Field, ErrorMessage } from "formik";

const Step2: React.FC = () => (
  <div className="space-y-4">
    <div className="flex flex-row ">
      <label htmlFor="age" className="p-4 block text-gray-700">
        Age:
      </label>
      <div className="flex flex-col w-full">
        <Field
          name="age"
          type="number"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
        <ErrorMessage
          name="age"
          component="h1"
          className="text-red-500 text-sm  mt-2  text-left"
        />
      </div>
    </div>

    <div className="flex flex-row ">
      <label htmlFor="gender" className="p-4 block text-gray-700">
        Gender:
      </label>
      <div className="flex flex-col  w-full">
        <Field
          as="select"
          name="gender"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Field>
        <ErrorMessage
          name="gender"
          component="h1"
          className="text-red-500 text-sm mt-2  text-left"
        />
      </div>
    </div>
  </div>
);

export default Step2;
