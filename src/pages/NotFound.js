import { useEffect, useState } from 'react';

// Not Found page
const NotFound = ({ type }) => {
  const [message, setMessage] = useState('존재하지 않는 페이지 입니다.');

  useEffect(() => {
    if (type === 'login') {
      setMessage('로그인 후 이용가능한 시스템입니다.');
    }

    return () => setMessage('존재하지 않는 페이지 입니다.');
  }, [type]);

  return <h3 style={{ color: 'red' }}>{message}</h3>;
};

export default NotFound;
