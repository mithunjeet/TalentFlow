import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import ProtectedRoute from './middleware/customRoute';
import Home from './pages/Home';
import Job from './pages/Job';
import Assessment from './pages/Assessment';
import Admin from './pages/Admin';
import Login from './components/auth/login';
import ForgotPassword from './components/auth/forgotPassword';
import CreateAccount from './components/auth/createAccount';
import OtpVerifyAfterForgetPassword from './components/auth/otpverifyAfterForgetPassword';
import CreateJob from './components/job/createJob';
import ApplyJob from './components/job/applyJob';
import AssessmentPage from './pages/AssessmentPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Support from './pages/Support';
import Terms from './pages/Terms';

 


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/login' element={<Login />} />
      <Route path='/forgotPassword' element={<ForgotPassword />} />
      <Route path='/register' element={<CreateAccount />} />
     
      <Route path='/otpverifyAfterForgetPassword' element={<OtpVerifyAfterForgetPassword />} />

      <Route
        path='/'
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      >
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/assessment/:id" element={<AssessmentPage />} /> 
        <Route path="/jobs" element={<Job />} />
        <Route path="/admin" element={<Admin />} />
        <Route path='/admin/create-job' element={<CreateJob/>}/>
        <Route path="/ApplyJob"  element={<ApplyJob/>}/>
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path='/Support' element={<Support/>}/>
        <Route path="/Terms"  element={<Terms/>}/>
        <Route
          path="*"
          element={
            <div className="flex justify-center items-center h-screen">
              <div className="text-red-500 text-xl font-semibold">
                SORRY PAGE NOT FOUND ... 404 🤔💭
              </div>
            </div>
          }
        />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

