import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Step1 from "../StepsComponents/Step1";
import Step2 from "../StepsComponents/Step2";
import Step3 from "../StepsComponents/Step3";
import { FormValues } from "../../types/types";

// Define the type for validation schemas
type ValidationSchemas = {
  step1: Yup.ObjectSchema<any, Yup.AnyObject>;
  step2: Yup.ObjectSchema<any, Yup.AnyObject>;
  step3: Yup.ObjectSchema<any, Yup.AnyObject>;
};

// Validation schemas
const validationSchemas: ValidationSchemas = {
  step1: Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  }),
  step2: Yup.object({
    age: Yup.number()
      .required("Age is required")
      .positive("Must be positive")
      .integer("Must be an integer"),
    gender: Yup.string().required("Gender is required"),
  }),
  step3: Yup.object({
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
  }),
};

const MainForm: React.FC = () => {
  const [step, setStep] = useState(1);

  // Initial values for each step
  const initialValues: FormValues = {
    step1: { name: "", email: "" },
    step2: { age: 0, gender: "" },
    step3: { address: "", city: "" },
  };

  // Handle next step
  const handleNext = (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    if (step < 3) {
      setStep((prevStep) => prevStep + 1);
    } else {
      // Handle final form submission
      alert("Your application has been submitted successfully!");
      window.location.reload(); // Reload the page after submission
    }
    setSubmitting(false); // Set submitting to false after handling
  };

  // Handle the "Back" button click
  const handleBack = () => setStep((prevStep) => prevStep - 1);

  return (
    <Formik
      initialValues={initialValues[`step${step}` as keyof FormValues]}
      validationSchema={
        validationSchemas[`step${step}` as keyof ValidationSchemas]
      }
      onSubmit={(values, { setSubmitting }) => {
        handleNext(values, { setSubmitting });
      }}
    >
      {({ isSubmitting, errors }) => (
        <Form className="w-full max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-md">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {/* Debugging Information */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Debug Info</h3>
            <pre className="bg-gray-100 p-2 rounded-md text-bla">
              {JSON.stringify({ errors }, null, 2)}
            </pre>
          </div>
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="bg-gray-500 text-white py-2 px-4 rounded-md"
              >
                Back
              </button>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              {step === 3 ? "Submit" : "Next"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MainForm;
