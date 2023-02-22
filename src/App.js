import { Routes, Route, Navigate } from 'react-router-dom';
/* import { useDispatch, useSelector } from 'react-redux'; */
import { /* useEffect, */ Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import PublicRoute from './components/PublicRoute/PublicRoute';
/* import PrivateRoute from './components/PrivateRoute/PrivateRoute'; */
import { Layout } from './components/Layout/Layout';

/* import { authOperations, authSelectors } from './redux/authorization'; */
import AppLoader from './components/Loader/Loader';
/* import { CreateLazyChunk } from './helpers/CreateLazyChunk'; */

/* const MainPage = CreateLazyChunk('MainPage', 'MainPage/MainPage');
const RegistrationPage = CreateLazyChunk('RegistrationPage', 'RegistrationPage/RegistrationPage');
const LoginPage = CreateLazyChunk('LoginPage', 'LoginPage/LoginPage');

const DiaryPage = CreateLazyChunk('DiaryPage', 'DiaryPage/DiaryPage');
const CalculatorPage = CreateLazyChunk('CalculatorPage', 'CalculatorPage/CalculatorPage'); */

import HomePage from './views/HomePage';

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
                /*  element={
                  <PublicRoute restricted redirectTo="/diary">
                    <HomePage />
                  </PublicRoute>
                } */
                element={<HomePage />}
              />
              {/*  <Route
                path="registration"
                element={
                  <PublicRoute restricted redirectTo="/calculator">
                    <RegistrationPage />
                  </PublicRoute>
                }
              />
              <Route
                path="signin"
                element={
                  <PublicRoute restricted redirectTo="/diary">
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="diary"
                element={
                  <PrivateRoute redirectTo="/signin">
                    <DiaryPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="calculator"
                element={
                  <PrivateRoute redirectTo="/signin">
                    <CalculatorPage />
                  </PrivateRoute>
                }
              /> */}
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      }

      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  );
}
