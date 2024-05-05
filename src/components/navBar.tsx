import React, { useState } from 'react';

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-violet-700 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-white text-lg font-semibold mr-4">Início</a>
          <button 
            onClick={toggleMobileMenu}
            className="block lg:hidden text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex space-x-4">
            <li><a href="/" className="text-white hover:text-gray-300">Cadastrar profissional</a></li>
            <li><a href="/" className="text-white hover:text-gray-300">Achar profissional</a></li>
            <li><a href="/" className="text-white hover:text-gray-300">Sair</a></li>
          </ul>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col space-y-4 mt-4">
            <li><a href="/" className="text-white hover:text-gray-300">Cadastrar profissional</a></li>
            <li><a href="/" className="text-white hover:text-gray-300">Achar profissional</a></li>
            <li><a href="/" className="text-white hover:text-gray-300">Sair</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
