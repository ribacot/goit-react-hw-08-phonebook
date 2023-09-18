import { FormPhone } from './form/FormPhone';
import { AuthForma } from './authForma/authForma';
import Home from './home/home';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import StartPage from './startPage/startPage';
// import { useSelector } from 'react-redux';


export const App = () => {
  // const {token}=useSelector(state=>state.auth)

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

