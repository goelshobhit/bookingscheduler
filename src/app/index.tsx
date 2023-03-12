/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { Login } from 'app/components/Login/Loadable';
import { UserDashboard } from 'app/components/UserDashboard/Loadable';
import { UserProtectedRoute } from 'app/components/UserProtectedRoute';
import { ExpertProtectedRoute } from 'app/components/ExpertProtectedRoute';
import { LogInRoute } from 'app/components/LogInRoute';
import { ExpertDashboard } from 'app/components/ExpertDashboard/Loadable';

import { getItem } from 'utils/storage';
import { NotFoundPage } from 'app/components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { SignUp } from './components/SignUp';

export function App() {
  const { i18n } = useTranslation();
  const loggedInfo =
    getItem('mybooks/userInfo') && JSON.parse(getItem('mybooks/userInfo'));
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Routes>
        <Route
          path="/"
          element={
            <LogInRoute isLoggedInfo={loggedInfo}>
              <Login />
            </LogInRoute>
          }
        />
        <Route
          path="/user-dashboard"
          element={
            <UserProtectedRoute isLoggedInfo={loggedInfo}>
              <UserDashboard />
            </UserProtectedRoute>
          }
        />
        <Route
          path="/expert-dashboard"
          element={
            <ExpertProtectedRoute isLoggedInfo={loggedInfo}>
              <ExpertDashboard isLoggedInfo={loggedInfo} />
            </ExpertProtectedRoute>
          }
        />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
