import * as React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
/* import { useDispatch, useSelector } from 'react-redux'; */
import { /* useEffect, */ Suspense } from 'react';

import PublicRoute from './components/PublicRoute/PublicRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { Layout } from './components/Layout/Layout';

/* import { authOperations, authSelectors } from './redux/authorization'; */
import AppLoader from './components/Loader/Loader';
/* import { CreateLazyChunk } from './helpers/CreateLazyChunk'; */

/* const MainPage = CreateLazyChunk('MainPage', 'MainPage/MainPage');
const RegistrationPage = CreateLazyChunk('RegistrationPage', 'RegistrationPage/RegistrationPage');
const LoginPage = CreateLazyChunk('LoginPage', 'LoginPage/LoginPage');

const DiaryPage = CreateLazyChunk('DiaryPage', 'DiaryPage/DiaryPage');
const CalculatorPage = CreateLazyChunk('CalculatorPage', 'CalculatorPage/CalculatorPage'); */

import HomePage from './views/HomePage/HomePage';
import LoginPage from './views/LoginPage/LoginPage';
import NewsPage from './views/NewsPage/NewsPage';
import ProfilePage from './views/ProfilePage/ProfilePage';

export default function App() {
  return (
    <>
      {
        /* !isRefetchingPage && */ //So that the interface does not blink when switching to a reboot
        <Suspense fallback={<AppLoader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />
              <Route
                path="news"
                element={
                  <PublicRoute>
                    <NewsPage />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute restricted redirectTo="/profile">
                    <LoginPage />
                  </PublicRoute>
                }
              />

              <Route
                path="profile"
                element={
                  <PrivateRoute redirectTo="/">
                    <ProfilePage />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      }
    </>
  );
}
