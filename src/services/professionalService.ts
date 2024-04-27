// src/services/professionalService.ts
import axios from 'axios';
import { Professional } from '../models/professional';

const baseUrl = 'http://localhost:3000'; // Ajuste a URL base do seu backend

export const getProfessionals = async () => {
  try {
    const response = await axios.get(`${baseUrl}/professionals`);
    return response.data; // Array de profissionais
  } catch (error) {
    console.error('Erro ao buscar profissionais:', error);
    throw error; // Repasse o erro para ser tratado no componente
  }
};

export const createProfessional = async (professionalData: Professional) => {
  try {
    const response = await axios.post(`${baseUrl}/create-professionals`, professionalData);
    return response.data; // Profissional criado
  } catch (error) {
    console.error('Erro ao criar profissional:', error);
    throw error; // Repasse o erro para ser tratado no componente
  }
};
