import React from 'react';
import { ProfessionalDTO } from '../dtos/professionalDto';

interface CarouselProps {
  totalPages: number;
  currentPage: number;
  professionals: ProfessionalDTO[];
  onNextPage: () => void;
  onPrevPage: () => void;
}

const Carousel: React.FC<CarouselProps> = ({ totalPages, currentPage, professionals, onNextPage, onPrevPage }) => {
  // const itemsPerPage = 5;
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = Math.min(startIndex + itemsPerPage, professionals.length);
  const currentItems = professionals.slice(0, 5);

  const handleNextPage = () => {
    onNextPage(); 
  };

  const handlePrevPage = () => {
    onPrevPage(); 
  };

  return (
    <div>
      <div>
        {currentItems.map((professional, index) => (
          <div key={index}>
            <p><strong>Nome:</strong> {professional.name}</p>
            <p><strong>Categoria:</strong> {professional.category}</p>
            <p><strong>Localização:</strong> {professional.location}</p>
            {/* Adicione mais detalhes se necessário */}
          </div>
        ))}
      </div>
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>{`${currentPage} / ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Próximo
        </button>
      </div>
    </div>
  );
};

export default Carousel;
