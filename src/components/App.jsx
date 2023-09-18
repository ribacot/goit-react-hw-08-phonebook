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

{
  /* <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<TrandingMovies />} />
    <Route path="movie" element={<Movies />} />
    <Route path="selectedmovie/:id" element={<SelectedMovie />}>
      <Route path="cast" element={<Cast />} />
      <Route path="reviews" element={<Reviews />} />
    </Route>
    <Route path="*" element={<div>STOP</div>} />
  </Route>
</Routes>; */
}
