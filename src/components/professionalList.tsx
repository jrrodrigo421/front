import React, { useState, useEffect } from 'react';
import { Professional } from '../models/professional';
import { getProfessionals, createProfessional } from '../services/professionalService';
import backgroundImage from '../assets/images/backgroundImage.jpg';
import LoaderSimple from './loaderSimple';
import { useLocation, useNavigate } from 'react-router-dom';
import logoImage from '../assets/images/logo2.jpg'; 


const ProfessionalList: React.FC = () => {
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [newProfessional, setNewProfessional] = useState<Professional>({
    name: '',
    category: '',
    location: '',
    availability: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const token = location.state?.token;
  const navigate = useNavigate();


  useEffect(() => {
    const fetchProfessionals = async () => {
      try {
        const fetchedProfessionals = await getProfessionals(token);
        setProfessionals(fetchedProfessionals);
      } catch (error) {
        console.error('Erro ao buscar profissionais:', error);
        
        navigate('/');
      }
    };
    
    
    console.log('Token recebido', token);
    
    fetchProfessionals();
    
  }, [navigate, token]);

  const handleCreateProfessional = async (newProfessional: Professional) => {
    setIsLoading(true);
    try {
      const createdProfessional = await createProfessional(token, newProfessional);
      setProfessionals([...professionals, createdProfessional]);
      console.log('Profissional criado com sucesso!');
    } catch (error) {
      console.error('Erro ao criar profissional:', error);
    } finally{
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };
  
  const handleLogout = () =>{
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <div className="max-w mx-auto p-4 text-center " style={{
       backgroundImage: `url(${backgroundImage})`,
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       filter: isLoading? 'blur(5px)' : 'none' }}>
         {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          {/* Loader */}
          <LoaderSimple></LoaderSimple>
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-violet-700"></div>
        </div>
      )}
      <div className="max-w-md mx-auto p-4 text-center bg-violet-200
">
      <br />
      <br />
     <div className='flex justify-center'>
     <img src={logoImage} width={300} height={300} alt="" />
     </div>
      <br />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleCreateProfessional(newProfessional);
        }}
      >
        <input
          className="p-2 mb-2 w-full"
          type="text"
          placeholder="Nome"
          value={newProfessional.name}
          onChange={(e) =>
            setNewProfessional({ ...newProfessional, name: e.target.value })
          }
        />
        <input
          className="p-2 mb-2 w-full"
        
          type="text"
          placeholder="Categoria"
          value={newProfessional.category}
          onChange={(e) =>
            setNewProfessional({ ...newProfessional, category: e.target.value })
          }
        />
        <input
          className="p-2 mb-2 w-full"
        
          type="text"
          placeholder="Localização"
          value={newProfessional.location}
          onChange={(e) =>
            setNewProfessional({ ...newProfessional, location: e.target.value })
          }
        />
        
        <button
          className="bg-violet-700 rounded-2xl p-2 w-full text-white hover:bg-violet-900"
          type="submit"
        >
          Criar Profissional
        </button>
      </form>
      <br />
      <button
          onClick={handleLogout} // Chama a função handleLogout ao clicar no botão
          className="bg-violet-700 text-white py-2 px-4 rounded-md hover:bg-violet-900"
        >
          Logout
        </button>
      <br />
      <br />
      <br />
      <h1 className="text-2xl font-semibold mb-4">Profissionais disponíveis agora:  </h1>
      <ul>
        {professionals.map((professional) => (
          <li  className="p-8 border-b">
            <strong>Nome:</strong> {professional.name} <br />
            <strong>Categoria:</strong> {professional.category} <br />
            <strong>Localização:</strong> {professional.location} <br />
            <button className='bg-violet-700'>Ver mais</button> 
          </li>
        )).reverse()}
      </ul>

      
    </div>
    </div>
  );
};

export default ProfessionalList;
