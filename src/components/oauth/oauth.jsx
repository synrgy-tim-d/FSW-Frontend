import { useSearchParams, useNavigate } from 'react-router-dom';

function OauthGoogle() {
  const [searchParams] = useSearchParams();

  const acc = searchParams.get('acc');
  const ref = searchParams.get('ref');

  const navigate = useNavigate();

  localStorage.setItem('AUTH_TOKEN', acc);
  localStorage.setItem('REFRESH_TOKEN', ref);
  navigate('/');

  //   console.log(acc, ref);
  return <div>Redirecting to Landing Page...</div>;
}

export default OauthGoogle;
