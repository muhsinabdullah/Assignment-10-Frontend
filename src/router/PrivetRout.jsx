import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation,} from 'react-router';

const PrivetRout = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    const location = useLocation();


    if(loading){
        return <span className="loading loading-spinner loading-xl flex content-center items-center"></span>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
    
};

export default PrivetRout;