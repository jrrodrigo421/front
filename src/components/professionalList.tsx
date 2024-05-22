import React, { useState, useEffect } from 'react';
import { Professional } from '../models/professional';
import { getProfessionals, createProfessional } from '../services/professionalService';
import backgroundImage from '../assets/images/backgroundImage.jpg';
import LoaderSimple from './loaderSimple';
import { useLocation, useNavigate } from 'react-router-dom';
import logoImage from '../assets/images/logo2.jpg'; 
import ModalMessage from './modalMessage';
import NavBar from './navBar';
import Carousel from './carousel';


const ProfessionalList: React.FC = () => {
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [newProfessional, setNewProfessional] = useState<Professional>({
    name: '',
    category: '',
    location: '',
    availability: [],
  });
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const token = location.state?.token;
  const navigate = useNavigate();
  const [modalMessage, setModalMessage] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);


  useEffect(() => {
   
    console.log('Token recebido', token);
    
    fetchProfessionals(currentPage);
    
  }, [navigate, token]);
  
  // const fetchProfessionals = async (page: number) => {
  //   try {
  //     const { totalPages, currentPage, professionals: fetchedProfessionals } = await getProfessionals(token, page);
  //     setTotalPages(totalPages);
  //     setCurrentPage(currentPage);
  //     setProfessionals(fetchedProfessionals);
  //     console.log('IMPRIMINDO fetchedProfessionals', fetchedProfessionals);
      
  //     console.log('IMPRIMINDO PROFESSINALS', professionals);
      
  //   } catch (error) {
  //     console.error('Erro ao buscar profissionais:', error);
      
  //     navigate('/');
  //   }
  // };
  
  
  const fetchProfessionals = async (page: number) => {
    try {
      const { totalPages, currentPage, professionals: fetchedProfessionals } = await getProfessionals(token, page);
      setTotalPages(totalPages);
      setCurrentPage(currentPage);
      setProfessionals(fetchedProfessionals);
      console.log('IMPRIMINDO fetchedProfessionals', fetchedProfessionals);
      return fetchedProfessionals; // Retornar os profissionais buscados
    } catch (error) {
      console.error('Erro ao buscar profissionais:', error);
      navigate('/');
      return []; // Retornar uma lista vazia em caso de erro
    }
  };
  
  
 
  
  // const nextPage = async () => {
  //   if (currentPage < totalPages) {
  //     const nextPageNumber = currentPage + 1;
  //     await fetchProfessionals(nextPageNumber);
  //   }
  // };
  
  // const prevPage = async () => {
  //   if (currentPage > 1) {
  //     const prevPageNumber = currentPage - 1;
  //     await fetchProfessionals(prevPageNumber);
  //   }
  // };
  
  const nextPage = async () => {
    if (currentPage < totalPages) {
      const nextPageNumber = currentPage + 1;
      const newProfessionals = await fetchProfessionals(nextPageNumber);
      return newProfessionals;
    }
  };
  
  const prevPage = async () => {
    if (currentPage > 1) {
      const prevPageNumber = currentPage - 1;
      const newProfessionals = await fetchProfessionals(prevPageNumber);
      return newProfessionals;
    }
  };
  
  
  

  const handleCreateProfessional = async (newProfessional: Professional) => {
    setIsLoading(true);
    try {
      await createProfessional(token, newProfessional);
      console.log('Profissional criado com sucesso!');
      setModalMessage('Sucesso ao criar profissional');
      setIsModalVisible(true);
      fetchProfessionals(currentPage);
      setNewProfessional({
        name: '',
        category: '',
        location: '',
        availability: [],
      })
    
    } catch (error) {
      console.error('Erro ao criar profissional:', error);
      setModalMessage('Erro ao criar profissional. Por favor, tente novamente.');
      setIsModalVisible(true);
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
  
  const handleCloseModal = () => {
    setIsModalVisible(false);
    if (modalMessage.startsWith('Profissional criado com sucesso!')) {
      setNewProfessional({
        name: '',
        category: '',
        location: '',
        availability: [],
      });
    }
  };
  
  

  return (
    
    <div>
      <NavBar></NavBar>
      <div className="max-w mx-auto p-4 text-center " style={{
       backgroundImage: `url(${backgroundImage})`,
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       filter: isLoading? 'blur(5px)' : 'none' }}>
         {isLoading && (
        <div className="h-full w-full fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          {/* Loader */}
          <LoaderSimple></LoaderSimple>
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-violet-700"></div>
        </div>
      )}
      {!isLoading && (
        <ModalMessage show={isModalVisible} onClose={handleCloseModal} message={modalMessage}></ModalMessage>
      )}
      
      <div className="max-w-md mx-auto p-4 text-center bg-violet-200">
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
          onClick={handleLogout} 
          className="bg-violet-700 text-white py-2 px-4 rounded-md hover:bg-violet-900"
        >
          Sair
        </button>
      <br />
      <br />
      <br />
      <h1 className="text-2xl font-semibold mb-4">Profissionais disponíveis agora:  </h1>
      <ul>
        <Carousel 
          totalPages={totalPages}
          currentPage={currentPage}
          professionals={professionals}
          onNextPage={nextPage}
          onPrevPage={prevPage}
        ></Carousel>
      </ul>

      
    </div>
    <br />
    <br />
    <br />
    </div>
    </div>
  );
};

export default ProfessionalList;
