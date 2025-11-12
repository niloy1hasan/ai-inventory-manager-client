import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext.';
import { useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user, loading} = use(AuthContext);
    const location = useLocation();

    if(loading) {
        return <span class="loading loading-infinity loading-xl"></span>;
    }
    
    if(user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoutes;