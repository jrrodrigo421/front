import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/loginPage';
import ProfessionalList from './components/professionalList';
import Navigation from './components/navigation';
import HomePage from './components/homePage';
import RegisterPage from './components/registerPage';


const App: React.FC = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Routes>
      <Route path="/"  Component={HomePage} />
      <Route path="/professional-list" Component={ProfessionalList} />
      <Route path="/login" Component={LoginPage} />
      <Route path="/register" Component={RegisterPage} />
      </Routes>
      
      {/* Outras rotas aqui */}
    </div>
  </BrowserRouter>
);

export default App;
