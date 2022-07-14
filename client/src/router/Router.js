import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GenerateToken from '../pages/generateToken/GenerateToken';
import ResetPassword from '../pages/resetPassword/ResetPassword';
import {
  RoutePaths,
  Error,
  Login,
  CreateForm,
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
          {/* user login routes */}
          <Route path={RoutePaths.LOGIN} element={<Login />} />
          <Route path={RoutePaths.SIGNUP} element={<Signup />} />
          {/* forgot password routes */}
          <Route path={RoutePaths.GENERATE_TOKEN} element={<GenerateToken />} />
          <Route path={RoutePaths.RESET_PASSWORD} element={<ResetPassword />} />
        </Route>
        <Route element={<RequireAuth />}>
          <Route element={<AdminAuth />}>
            <Route path={RoutePaths.FORM} element={<CreateForm />} />
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
