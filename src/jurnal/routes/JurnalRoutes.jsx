import { Navigate, Route, Routes } from 'react-router-dom';
import { JurnalPage } from '../index';

export const JurnalRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={ <JurnalPage /> } />


            <Route path="/*" element={ <Navigate  to="/"/> } /> 
        </Routes>
    </div>
  )
}
