// // src/components/ProfessionalList.tsx
// import React, { useState, useEffect } from 'react';
// import { Professional } from '../models/professional';
// import { getProfessionals, createProfessional } from '../services/professionalService';

// const ProfessionalList: React.FC = () => {
//   const [professionals, setProfessionals] = useState<Professional[]>([]);
  
//   const [newProfessional, setNewProfessional] = useState<Professional>({
//     name: '',
//     category: '',
//     location: '',
//     availability: [], 
//   });

//   useEffect(() => {
//     const fetchProfessionals = async () => {
//       try {
//         const fetchedProfessionals = await getProfessionals();
//         console.log(fetchProfessionals);
        
//         setProfessionals(fetchedProfessionals);
//       } catch (error) {
//         console.error('Erro ao buscar profissionais:', error);
//       }
//     };

//     fetchProfessionals();
//   }, []);

  
//   const handleCreateProfessional = async (newProfessional: Professional) => {
//     try {
//       const createdProfessional = await createProfessional(newProfessional);
//       setProfessionals([...professionals, createdProfessional]); // Atualiza a lista
//       return <p>Profissional criado com sucesso!</p>; 
//     } catch (error) {
//       console.error('Erro ao criar profissional:', error);
//       return <p>Erro ao criar profissional!</p>; 
//     }
//   };

//   return (
//     <div>
      
//       <div>
//       <h1>Lista de Profissionais</h1>
//       <ul>
//         {professionals.map((professional) => (
//           <li className='p-4'>
//             <strong>Nome:</strong> {professional.name} <br />
//             <strong>Categoria:</strong> {professional.category} <br />
//             <strong>Localização:</strong> {professional.location}
//           </li>
//         ))}
//       </ul>
//       </div>
    
      
//       <form
//   onSubmit={(event) => {
//     event.preventDefault();
//     const createdProfessional = {
//       name: newProfessional.name,
//       category: newProfessional.category,
//       location: newProfessional.location,
//       availability: newProfessional.availability,
//     };
//     handleCreateProfessional(createdProfessional);
//   }}
// >

//   <input className='p-2'
//     type="text"
//     placeholder="Nome"
//     value={newProfessional.name}
//     onChange={(e) =>
//       setNewProfessional({ ...newProfessional, name: e.target.value })
//     }
//   />
//   <input
//     type="text"
//     placeholder="Categoria"
//     value={newProfessional.category}
//     onChange={(e) =>
//       setNewProfessional({ ...newProfessional, category: e.target.value })
//     }
//   />
//   <input
//     type="text"
//     placeholder="Localização"
//     value={newProfessional.location}
//     onChange={(e) =>
//       setNewProfessional({ ...newProfessional, location: e.target.value })
//     }
//   />
 
//   <button className='bg-slate-300 rounded-2xl' type="submit">Criar Profissional</button>
// </form>
//     </div>
//   );
// };

// export default ProfessionalList;


import React, { useState, useEffect } from 'react';
import { Professional } from '../models/professional';
import { getProfessionals, createProfessional } from '../services/professionalService';
import backgroundImage from '../assets/images/backgroundImage.jpg';
import LoaderSimple from './loaderSimple';


const ProfessionalList: React.FC = () => {
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [newProfessional, setNewProfessional] = useState<Professional>({
    name: '',
    category: '',
    location: '',
    availability: [],
  });
  const [isLoading, setIsLoading] = useState(false); // State for loader


  useEffect(() => {
    const fetchProfessionals = async () => {
      try {
        const fetchedProfessionals = await getProfessionals();
        setProfessionals(fetchedProfessionals);
      } catch (error) {
        console.error('Erro ao buscar profissionais:', error);
      }
    };

    fetchProfessionals();
  }, []);

  const handleCreateProfessional = async (newProfessional: Professional) => {
    setIsLoading(true);
    try {
      const createdProfessional = await createProfessional(newProfessional);
      setProfessionals([...professionals, createdProfessional]);
      console.log('Profissional criado com sucesso!');
    } catch (error) {
      console.error('Erro ao criar profissional:', error);
    } finally{
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

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
          className="bg-violet-700 rounded-2xl p-2 w-full text-white"
          type="submit"
        >
          Criar Profissional
        </button>
      </form>
      <br />
      <br />
      <br />
      <h1 className="text-2xl font-semibold mb-4">Profissionais disponíveis agora:  </h1>
      <ul>
        {professionals.map((professional) => (
          <li  className="p-8 border-b">
            <strong>Nome:</strong> {professional.name} <br />
            <strong>Categoria:</strong> {professional.category} <br />
            <strong>Localização:</strong> {professional.location}
          </li>
        )).reverse()}
      </ul>

      
    </div>
    </div>
  );
};

export default ProfessionalList;
