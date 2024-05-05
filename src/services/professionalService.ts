// src/services/professionalService.ts
import axios, { AxiosRequestConfig } from 'axios';
import { Professional } from '../models/professional';

const baseUrl = 'http://localhost:3000/api'; 

export const getProfessionals = async (token: string, page: number) => {
  try {
    
    const config: AxiosRequestConfig = {
      headers:{
        Authorization: `Bearer ${token}`,
      },
      params:{
        page
      }
    }
    
    const response = await axios.get(`${baseUrl}/professionals`, config); 
    console.log('RESULTADO DA BUSCA');
    
    console.log(response.data);
    
    return response.data['professionals'];
  } catch (error) {
    console.error('Erro ao buscar profissionais:', error);
    throw error; 
  }
};

export const createProfessional = async (token: string, professionalData: Professional) => {
  try {
    const config: AxiosRequestConfig = {
      headers:{
        Authorization: `Bearear ${token}`
      }
    }
    const response = await axios.post(`${baseUrl}/create-professionals`, professionalData, config);
    return response.data; 
  } catch (error) {
    console.error('Erro ao criar profissional:', error);
    throw error; 
  }
};
