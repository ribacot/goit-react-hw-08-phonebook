import Container from 'components/container/Container';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuth } from 'redux/selectors';

export default function StartPage() {
const {token}=useSelector(selectAuth)
const navigate=useNavigate()
useEffect(() => {
  token&&navigate("/contacts")

}, [token,navigate])
  return (
    <Container>
      <h1>HELLO turn button Login</h1>
    </Container>
  );
}
