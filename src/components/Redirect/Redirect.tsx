import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { isloggedIn } from '../../store/User/UserSlice';

export default function Redirect(): null {
  const isLoggedIn = useAppSelector(isloggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    let to = isLoggedIn ? '/dashboard' : '/';
    navigate(to, { replace: true });
  }, []);

  return null;
}
