import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './layout/layout';

const StartPage =lazy(()=>import('./startPage/startPage'))
const FormPhone =lazy(()=>import('./form/FormPhone'))
const Home =lazy(()=>import('./home/home'))
const AuthForma =lazy(()=>import('./authForma/authForma'))

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<StartPage />} />
        <Route path="/login" element={<AuthForma />} />
        <Route path="/singup" element={<AuthForma isLogIn={false} />} />
        <Route path="/contacts" element={<Home />} />
        <Route path="/add_contact" element={<FormPhone />} />
      </Route>
    </Routes>
  );
};
