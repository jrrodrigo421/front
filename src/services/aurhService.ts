// src/services/authService.ts

import axios from 'axios';


const baseUrl = 'http://localhost:3000/api'; // Ajuste a URL base do seu backend


export const handleLogin = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, { email, password });
    console.log('Login realizado:', response.data.email);
    // Lógica adicional após o login bem-sucedido (redirecionar, atualizar o estado global de autenticação, etc.)
  } 
  catch (error) {
    console.error('Erro ao fazer login:', error);
    // Tratar erros de login (exibir mensagem de erro, limpar campos do formulário, etc.)
    throw error;
  }
};