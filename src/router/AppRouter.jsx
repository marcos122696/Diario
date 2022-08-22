import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/index';
import { JurnalRoutes } from '../jurnal/index';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={ <AuthRoutes /> } />

        <Route path="/*" element={ <JurnalRoutes /> } />
    </Routes>
  )
}
