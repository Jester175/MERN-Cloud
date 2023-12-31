import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { Layout } from "./components/Layout/Layout";
import { useActions } from "./hooks/useActions";
import { AuthPage } from "./pages/AuthPage";
import { MainPage } from "./pages/MainPage";

import "./assets/styles/main.global.css";
import "./assets/styles/fonts.global.css";

export const App: React.FC = () => {
  const { isAuth } = useTypedSelector((state) => state.user);
  const { auth } = useActions();

  useEffect(() => {
    auth();
  }, [])

  return (
    <BrowserRouter basename="/">
      {!isAuth ? (
        <Routes>
          <Route
            path="/registration"
            element={<AuthPage type="registration" />}
          />
          <Route path="/login" element={<AuthPage type="login" />} />
          <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
};
