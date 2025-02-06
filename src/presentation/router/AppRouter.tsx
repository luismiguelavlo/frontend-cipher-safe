import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const LoginPage = React.lazy(() => import("../auth/pages/login/LoginPage"));
const RegisterPage = React.lazy(
  () => import("../auth/pages/register/RegisterPage")
);

const SecurityBoxPage = React.lazy(
  () => import("../dashboard/security-box/pages/SecurityBoxPage")
);

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <>
          <Route path="auth/login" element={<LoginPage />} />
          <Route path="auth/register" element={<RegisterPage />} />
        </>
        <>
          <Route path="/dashboard">
            <Route index element={<SecurityBoxPage />} />
            <Route path="security-box" element={<SecurityBoxPage />} />
          </Route>
        </>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
