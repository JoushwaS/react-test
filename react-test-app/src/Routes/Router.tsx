import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load the components
const TestPage = lazy(() => import("../Pages/TestPage/TestPage"));
const MainFormPage = lazy(() => import("../Pages/MainForm/MainFormPage"));
const NotFoundPage = lazy(() => import("../Pages/NotFoundScreen/NotFoundPage"));

const RouterComp: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainFormPage />} />
        <Route path="/test-page" element={<TestPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default RouterComp;
