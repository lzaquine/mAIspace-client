import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
import { Navigate } from 'react-router-dom';

function Private({ children }) {
  const { loggedIn, loading } = useContext(AuthContext);

  if (loading) return <p></p>;

  if (!loggedIn) return <Navigate to="/login" />;
  else return children;
}

export default Private;