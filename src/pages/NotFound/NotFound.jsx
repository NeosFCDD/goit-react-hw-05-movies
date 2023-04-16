import { useEffect, useState  } from 'react';
import { Navigate } from 'react-router-dom';
import css from './NotFound.module.css';

const NotFound = () => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setStatus(true);
      console.log('🚀 ~ timeoutId:', timeoutId);
    }, 5000);
  }, []);

  return status ? (
    <Navigate to="/" replace={true} />
  ) : (
    <div className={css.container}>
      <p className={css.message}>
        Sorry! This page was not found. You will be redirected to the home page after 5 seconds!
      </p>
    </div>
  );
};

export default NotFound;