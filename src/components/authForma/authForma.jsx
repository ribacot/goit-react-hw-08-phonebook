import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import css from '../form/FormFone.module.css';
import Container from 'components/container/Container';
import { loginUserThunk, userCreateThunk } from 'redux/auth/authThunk';
import { selectAuth } from 'redux/selectors';

export default function AuthForma({ isLogIn = true }) {
  const [name, setName] = useState('');
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const { token } = useSelector(selectAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    token && navigate('/contacts');
  }, [token, navigate]);

  const hendleChange = e => {
    const { name, value } = e.target;

    const switchInput = name => {
      switch (name) {
        case 'name':
          setName(value.trim());
          break;
        case 'email':
          setMail(value.trim());
          break;
        case 'password':
          setPassword(value.trim());
          break;
        default:
          return;
      }
    };
    switchInput(name);
  };
  const onSingInNav = () => navigate('/');
  const onSingUpNav = () => navigate('/singup');

  const formSubmit = async e => {
    e.preventDefault();
    const newUser = { name, email, password };
    const loginUser = { email, password };

    isLogIn
      ? dispatch(loginUserThunk(loginUser))
      : dispatch(userCreateThunk(newUser));
    !isLogIn && onSingInNav();

    setName('');
    setMail('');
    setPassword('');
  };

  return (
    <Container title={isLogIn ? 'LogIn' : 'Registration'}>
      <form className={css.form_Add_Contact} onSubmit={formSubmit}>
        {!isLogIn && (
          <div className={css.decor_input}>
            <label className={css.lable} htmlFor="name">
              Name
            </label>
            <input
              className={css.input}
              id="name"
              type="text"
              name="name"
              // pattern={validName}
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={hendleChange}
              value={name}
            />
          </div>
        )}
        <div className={css.decor_input}>
          <label className={css.lable} htmlFor="email">
            E-mail
          </label>
          <input
            className={css.input}
            id="email"
            type="email"
            name="email"
            // pattern={validPhone}
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={hendleChange}
            value={email}
          />
        </div>
        <div className={css.decor_input}>
          <label className={css.lable} htmlFor="password">
            Password
          </label>
          <input
            className={css.input}
            id="password"
            type="password"
            name="password"
            // pattern={validPhone}
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={hendleChange}
            value={password}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button
            className={css.btn_add}
            type="submit"
            disabled={
              isLogIn ? !email || !password : !name || !email || !password
            }
          >
            {isLogIn ? 'Login' : 'Registration'}
          </button>
          {isLogIn && (
            <button className={css.btn_add} type="button" onClick={onSingUpNav}>
              SingUp
            </button>
          )}
        </div>
      </form>
    </Container>
  );
}
