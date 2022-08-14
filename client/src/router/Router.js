import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../common/components/layout/ScrollToTop';
import GenerateToken from '../pages/generateToken/GenerateToken';
import Profile from '../pages/profile/Profile';
import Report from '../pages/report/Report';
import ResetPassword from '../pages/resetPassword/ResetPassword';
import ThanksPage from '../pages/thanks/ThanksPage';
import {
  AdminAuth,
  CreateForm,
  Dashboard,
  Error,
  Header,
  IsLoggedIn,
  Login,
  RequireAuth,
  RoutePaths,
  Signup,
  UserResponseForm,
} from './index';

const Router = () => (
  <BrowserRouter>
    <Suspense>
      <ScrollToTop>
        <Header />
        <Routes>
          <Route element={<IsLoggedIn />}>
            {/* user login routes */}
            <Route path={RoutePaths.LOGIN} element={<Login />} />
            <Route path={RoutePaths.SIGNUP} element={<Signup />} />
            {/* forgot password routes */}
            <Route
              path={RoutePaths.GENERATE_TOKEN}
              element={<GenerateToken />}
            />
            <Route
              path={RoutePaths.RESET_PASSWORD}
              element={<ResetPassword />}
            />
          </Route>
          <Route element={<RequireAuth />}>
            <Route element={<AdminAuth />}>
              <Route path={RoutePaths.FORM} element={<CreateForm />} />
              <Route path={RoutePaths.DASHBAORD} element={<Dashboard />} />
            </Route>
            <Route path={RoutePaths.USER} element={<Profile />} />
            <Route
              path={RoutePaths.SUBMIT_FORM}
              element={<UserResponseForm />}
            />
            <Route path={RoutePaths.THANKS} element={<ThanksPage />} />
            <Route path={RoutePaths.REPORT} element={<Report />} />
          </Route>
          <Route path={RoutePaths.ERROR} element={<Error />} />
        </Routes>
      </ScrollToTop>
    </Suspense>
  </BrowserRouter>
);

export default Router;
