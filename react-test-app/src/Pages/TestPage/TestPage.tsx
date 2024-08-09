import React from "react";

const TestPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome to the Test Page
      </h1>
      <p className="text-lg text-gray-600 mb-4 text-center max-w-lg">
        This is a sample page created to test the routing and component
        structure of our React application. Below is some placeholder content to
        demonstrate layout and styling with Tailwind CSS.
      </p>
    </div>
  );
};

export default TestPage;
