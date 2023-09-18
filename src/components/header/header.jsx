import { useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'components/container/Container';
import css from '../form/FormFone.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/auth/authThunk';

export default function Header() {
  const { token, userName } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogin = () => navigate('/login');
  const onlogOut = () => {
    dispatch(logOutThunk());
  };
  const onAddContactNav = () => navigate('/add_contact');

  return (
    <header>
      <Container title="Phone book">
        <nav>
          <button
            type="button"
            className={css.btn_add}
            onClick={token ? onlogOut : onLogin}
          >
            {token ? 'LogOut' : 'Login'}
          </button>
          {token && <span> {userName}</span>}
          {token && (
            <button
              type="button"
              className={css.btn_add}
              onClick={onAddContactNav}
            >
              Add Contact
            </button>
          )}
        </nav>
      </Container>
    </header>
  );
}
