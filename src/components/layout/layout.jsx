import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import Header from 'components/header/header';
import { instance } from 'redux/auth/instansAxiosAPI';
import { selectAuth } from 'redux/selectors';

export default function Layout() {
  const { token } = useSelector(selectAuth);

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
