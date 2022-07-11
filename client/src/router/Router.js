import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  RoutePaths,
  Error,
  Login,
  Form,
  Dashboard,
  Signup,
  RequireAuth,
  AdminAuth,
  IsLoggedIn,
  Header,
  UserResponseForm,
} from './index';

const Router = () => (
  <BrowserRouter>
    <Suspense>
      <Header />
      <Routes>
        <Route element={<IsLoggedIn />}>
          <Route path={RoutePaths.LOGIN} element={<Login />} />
          <Route path={RoutePaths.SIGNUP} element={<Signup />} />
        </Route>
        <Route element={<RequireAuth />}>
          <Route element={<AdminAuth />}>
            <Route path={RoutePaths.FORM} element={<Form />} />
            <Route path={RoutePaths.DASHBAORD} element={<Dashboard />} />
          </Route>
          <Route path={RoutePaths.SUBMIT_FORM} element={<UserResponseForm />} />
        </Route>
        <Route path={RoutePaths.ERROR} element={<Error />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default Router;
