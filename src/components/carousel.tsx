// import React from 'react';
// import { ProfessionalDTO } from '../dtos/professionalDto';

// interface CarouselProps {
//   totalPages: number;
//   currentPage: number;
//   professionals: ProfessionalDTO[];
//   onNextPage: () => void;
//   onPrevPage: () => void;
// }

// const Carousel: React.FC<CarouselProps> = ({ totalPages, currentPage, professionals, onNextPage, onPrevPage }) => {
//   // const itemsPerPage = 5;
//   // const startIndex = (currentPage - 1) * itemsPerPage;
//   // const endIndex = Math.min(startIndex + itemsPerPage, professionals.length);
//   const currentItems = professionals.slice(0, 5);

//   const handleNextPage = () => {
//     onNextPage(); 
//   };

//   const handlePrevPage = () => {
//     onPrevPage(); 
//   };

//   return (
//     <div>
//       <div>
//         {currentItems.map((professional, index) => (
//           <div key={index}>
//             <p><strong>Nome:</strong> {professional.name}</p>
//             <p><strong>Categoria:</strong> {professional.category}</p>
//             <p><strong>Localização:</strong> {professional.location}</p>
//           </div>
//         ))}
//       </div>
//       <div>
//         <button onClick={handlePrevPage} disabled={currentPage === 1}>
//           Anterior
//         </button>
//         <span>{`${currentPage} / ${totalPages}`}</span>
//         <button onClick={handleNextPage} disabled={currentPage === totalPages}>
//           Próximo
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;



// import React from 'react';
// import { ProfessionalDTO } from '../dtos/professionalDto';

// interface CarouselProps {
//   totalPages: number;
//   currentPage: number;
//   professionals: ProfessionalDTO[];
//   onNextPage: () => void;
//   onPrevPage: () => void;
// }

// const Carousel: React.FC<CarouselProps> = ({ totalPages, currentPage, professionals, onNextPage, onPrevPage }) => {
//   const currentItems = professionals.slice(0, 5);

//   return (
//     <div className="max-w-4xl mx-auto py-8 px-4">
//       <div className="space-y-6">
//         {currentItems.length === 0 ? (
//           <p className="text-center text-gray-500">Nenhum profissional disponível</p>
//         ) : (
//           currentItems.map((professional, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-md p-6">
//               <p className="text-xl font-semibold text-gray-800"><strong>Nome:</strong> {professional.name}</p>
//               <p className="text-gray-600"><strong>Categoria:</strong> {professional.category}</p>
//               <p className="text-gray-600"><strong>Localização:</strong> {professional.location}</p>
//             </div>
//           ))
//         )}
//       </div>
//       <div className="flex justify-between items-center mt-8">
//         <button 
//           onClick={onPrevPage} 
//           disabled={currentPage === 1} 
//           className="bg-violet-700 rounded-2xl text-white py-2 px-4  shadow transition duration-300 ease-in-out transform hover:bg-indigo-900 hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed"
//           aria-label="Página anterior"
//         >
//           Anterior
//         </button>
//         <button 
//           onClick={onNextPage} 
//           disabled={currentPage === totalPages} 
//           className="bg-violet-700 rounded-2xl text-white py-2 px-4  shadow transition duration-300 ease-in-out transform hover:bg-indigo-900 hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed"
//           aria-label="Próxima página"
//         >
//           Próximo
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;


import React from 'react';
import { ProfessionalDTO } from '../dtos/professionalDto';
import { useSpring, animated } from '@react-spring/web';

interface CarouselProps {
  totalPages: number;
  currentPage: number;
  professionals: ProfessionalDTO[];
  onNextPage: () => void;
  onPrevPage: () => void;
}

const Carousel: React.FC<CarouselProps> = ({ totalPages, currentPage, professionals, onNextPage, onPrevPage }) => {
  const currentItems = professionals.slice(0, 5);

  // Define spring animation
  const [props, api] = useSpring(() => ({
    from: { transform: 'translateX(0%)' },
  }));

  const handleNextPage = () => {
    api.start({
      from: { transform: 'translateX(100%)' },
      to: { transform: 'translateX(0%)' },
      config: { tension: 280, friction: 60 },
      onRest: onNextPage,
    });
  };

  const handlePrevPage = () => {
    api.start({
      from: { transform: 'translateX(-100%)' },
      to: { transform: 'translateX(0%)' },
      config: { tension: 280, friction: 60 },
      onRest: onPrevPage,
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="overflow-hidden">
        <animated.div style={props} className="space-y-6">
          {currentItems.length === 0 ? (
            <p className="text-center text-gray-500">Nenhum profissional disponível</p>
          ) : (
            currentItems.map((professional, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <p className="text-xl font-semibold text-gray-800"><strong>Nome:</strong> {professional.name}</p>
                <p className="text-gray-600"><strong>Categoria:</strong> {professional.category}</p>
                <p className="text-gray-600"><strong>Localização:</strong> {professional.location}</p>
              </div>
            ))
          )}
        </animated.div>
      </div>
      <div className="flex justify-between items-center mt-8">
        <button 
          onClick={handlePrevPage} 
          disabled={currentPage === 1} 
          className="bg-indigo-600 text-white py-2 px-4 rounded-lg shadow transition duration-300 ease-in-out transform hover:bg-indigo-700 hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed"
          aria-label="Página anterior"
        >
          Anterior
        </button>
        <span className="text-gray-700 font-medium">{`${currentPage} / ${totalPages}`}</span>
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages} 
          className="bg-indigo-600 text-white py-2 px-4 rounded-lg shadow transition duration-300 ease-in-out transform hover:bg-indigo-700 hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed"
          aria-label="Próxima página"
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

export default Carousel;
