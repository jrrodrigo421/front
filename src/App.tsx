import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/loginPage';
import ProfessionalList from './components/professionalList';
import Navigation from './components/navigation';
import HomePage from './components/homePage';
import RegisterPage from './components/registerPage';
import RouteLogger from './components/routerLogger';


const App: React.FC = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <RouteLogger/>
      <Routes>
      <Route path="/"  Component={HomePage} />
      <Route path="/professional-list" Component={ProfessionalList} />
      <Route path="/login" Component={LoginPage} />
      <Route path="/register" Component={RegisterPage} />
      <Route path="*" element={<HomePage />} />
      </Routes>
      
      {/* Outras rotas aqui */}
    </div>
  </BrowserRouter>
);

export default App;
