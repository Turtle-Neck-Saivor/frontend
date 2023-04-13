import { createBrowserRouter } from 'react-router-dom';
import { RouterBase } from './types/route';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import AuthCheckedLayout from './layout/AuthCheckedLayout';
import GeneralLayout from './layout/GeneralLayout';

const routerData: RouterBase[] = [
  {
    id: 0,
    path: '/',
    label: 'Home',
    element: <HomePage />,
    withAuth: true,
  },
  {
    id: 1,
    path: '/signup',
    label: '회원가입',
    element: <SignupPage />,
    withAuth: false,
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
