import { createBrowserRouter } from 'react-router-dom';
import { RouterBase } from './types/route';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import AuthCheckedLayout from './layout/AuthCheckedLayout';
import GeneralLayout from './layout/GeneralLayout';
import CameraPage from './pages/CameraPage';
import ReportPage from './pages/ReportPage';
import SettingsPage from './pages/SettingsPage';
import LoginPage from './pages/LoginPage';
import StretchingPage from './pages/StretchingPage';
import DiagnosisPage from './pages/DiagnosisPage';
import MatchingPage from './pages/MatchingPage';
import RoutinePage from './pages/RoutinePage';

const routerData: RouterBase[] = [
  {
    id: 0,
    path: '/',
    label: 'Home',
    element: <HomePage />,
    withAuth: false,
  },
  {
    id: 1,
    path: '/signup',
    label: '회원가입',
    element: <SignupPage />,
    withAuth: false,
  },
  {
    id: 2,
    path: '/camera',
    label: 'Camera',
    element: <CameraPage />,
    withAuth: true,
  },
  {
    id: 3,
    path: '/report',
    label: 'Report',
    element: <ReportPage />,
    withAuth: true,
  },
  {
    id: 4,
    path: '/settings',
    label: 'Settings',
    element: <SettingsPage />,
    withAuth: true,
  },
  {
    id: 5,
    path: '/login',
    label: 'Login',
    element: <LoginPage />,
    withAuth: false,
  },
  {
    id: 6,
    path: '/stretching',
    label: 'Stretching',
    element: <StretchingPage />,
    withAuth: true,
  },
  {
    id: 7,
    path: '/diagnosis',
    label: 'Diagnosis',
    element: <DiagnosisPage />,
    withAuth: true,
  },
  {
    id: 8,
    path: '/matching',
    label: 'Matching',
    element: <MatchingPage />,
    withAuth: true,
  },
  {
    id: 9,
    path: '/routine',
    label: 'Routine',
    element: <RoutinePage />,
    withAuth: true,
  },
];

export const routers = createBrowserRouter(
  routerData.map((router) => {
    if (router.withAuth) {
      return {
        path: router.path,
        element: <AuthCheckedLayout>{router.element}</AuthCheckedLayout>,
      };
    } else {
      return {
        path: router.path,
        element: <GeneralLayout>{router.element}</GeneralLayout>,
      };
    }
  }),
);
