// import LoginPage from "./components/loginPage";
// // import ProfessionalList from "./components/professionalList";

// export function App() {

//   return (
    
//    <div className="p-8">
//       {/* <ProfessionalList></ProfessionalList> */}
//       <LoginPage></LoginPage>
//    </div>
    
   
//   )
// }

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/loginPage';
import ProfessionalList from './components/professionalList';
import Navigation from './components/navigation';


// import Home from './pages/Home';
// import About from './pages/About';

// const App = () => (
//   <div>
//     <Route path="/" Component={LoginPage} />
//     <Route path="/professional-list" Component={ProfessionalList} />
//     {/* Adicione outras rotas aqui */}
//   </div>
// );

const App: React.FC = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Routes>
      <Route path="/"  Component={LoginPage} />
      <Route path="/professional-list" Component={ProfessionalList} />
      </Routes>
      
      {/* Outras rotas aqui */}
    </div>
  </BrowserRouter>
);

export default App;
