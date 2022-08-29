import { Route, Routes, Navigate } from 'react-router-dom';

import { AuthRoutes } from '../auth/index';
import { JurnalRoutes } from '../jurnal/index';
import { CheckingAuth } from '../ui/index';
import { useCheckAuth } from '../hooks/useCheckAuth';

export const AppRouter = () => {

    const { status } = useCheckAuth();
    
    if ( status === "checking" ) {
        return <CheckingAuth />;
    }

  return (
    <Routes>
        {
            ( status === "authenticated" ) 
            ? <Route path="/*" element={ <JurnalRoutes /> } />
            : <Route path="/auth/*" element={ <AuthRoutes /> } />
        }

        <Route path="/*" element={ <Navigate to='/auth/login' /> } />

    </Routes>
  )
}
