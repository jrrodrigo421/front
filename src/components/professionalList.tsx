// src/components/ProfessionalList.tsx
import React, { useState, useEffect } from 'react';
import { Professional } from '../models/professional';
import { getProfessionals, createProfessional } from '../services/professionalService';

const ProfessionalList: React.FC = () => {
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  
  const [newProfessional, setNewProfessional] = useState<Professional>({
    name: '',
    category: '',
    location: '',
    availability: [], 
  });

  useEffect(() => {
    const fetchProfessionals = async () => {
      try {
        const fetchedProfessionals = await getProfessionals();
        setProfessionals(fetchedProfessionals);
      } catch (error) {
        console.error('Erro ao buscar profissionais:', error);
        // Exibir mensagem de erro para o usuário
      }
    };

    fetchProfessionals();
  }, []);

  
  const handleCreateProfessional = async (newProfessional: Professional) => {
    try {
      const createdProfessional = await createProfessional(newProfessional);
      setProfessionals([...professionals, createdProfessional]); // Atualiza a lista
      // Exibir mensagem de sucesso (opcional)
      return <p>Profissional criado com sucesso!</p>; // Retorna JSX
    } catch (error) {
      console.error('Erro ao criar profissional:', error);
      // Exibir mensagem de erro para o usuário
      return <p>Erro ao criar profissional!</p>; // Retorna JSX com erro
    }
  };

  return (
    <div>
    
      
      <form
  onSubmit={(event) => {
    event.preventDefault();
    // Crie o objeto newProfessional com os dados preenchidos pelo usuário
    const createdProfessional = {
      name: newProfessional.name,
      category: newProfessional.category,
      location: newProfessional.location,
      availability: newProfessional.availability,
    };
    handleCreateProfessional(createdProfessional);
  }}
>

  <input
    type="text"
    placeholder="Nome"
    value={newProfessional.name}
    onChange={(e) =>
      setNewProfessional({ ...newProfessional, name: e.target.value })
    }
  />
  <input
    type="text"
    placeholder="Categoria"
    value={newProfessional.category}
    onChange={(e) =>
      setNewProfessional({ ...newProfessional, category: e.target.value })
    }
  />
  <input
    type="text"
    placeholder="Localização"
    value={newProfessional.location}
    onChange={(e) =>
      setNewProfessional({ ...newProfessional, location: e.target.value })
    }
  />
 
  <button type="submit">Criar Profissional</button>
</form>
    </div>
  );
};

export default ProfessionalList;
