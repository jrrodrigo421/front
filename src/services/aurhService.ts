// src/services/authService.ts

import axios from 'axios';
import { UserDTO } from '../dtos/userRegister';


const baseUrl = 'http://localhost:3000/api'; // Ajuste a URL base do seu backend


export const  handleLogin = async (email: string, password: string) => {
  console.log('imprimindo email e senha', email, password);
  
  try {
    console.log('imprimindo url que manda pro back', `${baseUrl}/login`, { email, password });
    
    const response = await axios.post(`${baseUrl}/login`, { email, password });
    console.log('IMPRINDO RESPONSE', response);
    
    const token = response.data.token;
    console.log('Login realizado:', response.data.email);
    localStorage.setItem('token', token);
    console.log('imprindo token ', token);
    return token;
    
    // Lógica adicional após o login bem-sucedido (redirecionar, atualizar o estado global de autenticação, etc.)
  } 
  catch (error) {
    console.error('Erro ao fazer login:', error);
    // Tratar erros de login (exibir mensagem de erro, limpar campos do formulário, etc.)
    throw error;
  }
};
export const  handleRegister = async (userDTO: UserDTO) => {
  
  try {
    const response = await axios.post(`${baseUrl}/register`, userDTO);
    console.log('Usuário registrado com sucesso:', response.data);
    return response.data; // Pode ser útil retornar algum dado, se necessário
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    throw error;
  }
};