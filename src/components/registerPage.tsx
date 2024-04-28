// src/components/RegisterPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleLogin } from '../services/aurhService';
import backgroundImage from '../assets/images/backgroundImage.jpg';



const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleLogin(email, password);
      // Lógica adicional após o login bem-sucedido (redirecionar, atualizar o estado global de autenticação, etc.)
      navigate('/professional-list')
      console.log('ERA PRA NAVEGAR, mas nao esta navegando');
      
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      // Tratar erros de login (exibir mensagem de erro, limpar campos do formulário, etc.)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100"  style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Faça o seu cadastro</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 rounded-md border"
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 rounded-md border"
          />
          <button
            type="submit"
            className="w-full bg-violet-700 text-white py-2 rounded-md hover:bg-violet-600"
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
