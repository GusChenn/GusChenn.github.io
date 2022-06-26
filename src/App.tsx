import React from 'react';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import PcsPage from './pcs/pcs-page.component';
import Plateau from './pimas/components/plateau.component';
import './pimas/styles/App.scss';

const App:React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/pimas' element={<Plateau />} />
        <Route path='/' element={<PcsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
