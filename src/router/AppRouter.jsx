import { Route, Routes, Navigate } from 'react-router-dom';

import { AuthRoutes } from '../auth';
import { JurnalRoutes } from '../jurnal';
import { CheckingAuth } from '../ui';
import { useCheckAuth } from '../hooks';

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
