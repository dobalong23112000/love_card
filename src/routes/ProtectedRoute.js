
import { AuthContext } from 'contexts/AuthContext';
import {  useContext } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component }) => {
    const { authState } = useContext(AuthContext);
    const Page = component;

    if (!authState.isAuthenticated) {
        return <Navigate to="/auth" replace />;
    }
    return <Page />

};
export default ProtectedRoute