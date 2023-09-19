import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Container from 'components/container/Container';
import css from '../form/FormFone.module.css';
import { logOutThunk } from 'redux/auth/authThunk';
import { selectAuth } from 'redux/selectors';

export default function Header() {
  const { token, userName } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogin = () => navigate('/login');
  const onlogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <header>
      <Container title="Phone book">
        <nav>
          <button
            type="button"
            className={css.btn_add}
            onClick={!token ? onLogin : undefined}
            disabled={!!userName}
          >
            {token ? userName : 'Login'}
          </button>
          {token && (
            <button type="button" className={css.btn_add} onClick={onlogOut}>
              Logout
            </button>
          )}
        </nav>
      </Container>
    </header>
  );
}
