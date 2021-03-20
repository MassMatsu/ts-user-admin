import React from 'react';
import { Home } from '../components/pages/Home';
import { Page404 } from '../components/pages/Page404';
import { Setting } from '../components/pages/Setting';
import { UserAdmin } from '../components/pages/UserAdmin';

export const HomeRoutes = [
  {
    path: '/',
    exact: true,
    children: <Home />
  },
  {
    path: '/user-admin',
    exact: false,
    children: <UserAdmin />
  },
  {
    path: '/setting',
    exact: false,
    children: <Setting />
  },
  {
    path: '*',
    exact: false,
    children: <Page404/>
  },
];
