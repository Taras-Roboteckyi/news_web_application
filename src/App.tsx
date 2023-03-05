import * as React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from 'react';

import PublicRoute from './components/PublicRoute/PublicRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { Layout } from './components/Layout/Layout';
import AppLoader from './components/Loader/Loader';

import { CreateLazyChunk } from './helpers/CreateLazyChunk';

const HomePage = CreateLazyChunk('HomePage', 'HomePage/HomePage');

const LoginPage = CreateLazyChunk('LoginPage', 'LoginPage/LoginPage');

const NewsPage = CreateLazyChunk('NewsPage', 'NewsPage/NewsPage');

const ProfilePage = CreateLazyChunk('ProfilePage', 'ProfilePage/ProfilePage');

export default function App() {
  return (
    <>
      {
        <Suspense>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PublicRoute>
                    <Suspense fallback={<AppLoader />}>
                      <HomePage />
                    </Suspense>
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
                    <Suspense fallback={<AppLoader />}>
                      <LoginPage />
                    </Suspense>
                  </PublicRoute>
                }
              />

              <Route
                path="profile"
                element={
                  <PrivateRoute redirectTo="/">
                    <Suspense fallback={<AppLoader />}>
                      <ProfilePage />
                    </Suspense>
                  </PrivateRoute>
                }
              />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Suspense>
      }
    </>
  );
}
