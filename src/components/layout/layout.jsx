import Header from 'components/header/header';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { instance } from 'redux/auth/instansAxiosAPI';

export default function Layout() {
  const { token } = useSelector(state => state.auth);

  useEffect(() => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }, [token]);
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<h2>Loading...</h2>}>{<Outlet />}</Suspense>
      </main>
    </>
  );
}
