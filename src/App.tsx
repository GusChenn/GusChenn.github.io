import React from 'react';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import PcsPage from './pcs/pcs-page.component';
import Plateau from './pimas/components/plateau.component';
import './pimas/styles/App.scss';

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/pimas' element={<Plateau />} />
        <Route path='/pcs' element={<PcsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
