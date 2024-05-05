import React, { useEffect } from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  message: string;
}

const ModalMessage: React.FC<ModalProps> = ({ show, onClose, message }) => {
  useEffect(() => {
    // if (show) {
    //   const timer = setTimeout(() => {
    //     onClose();
    //   }, 5000);

    //   return () => {
    //     clearTimeout(timer);
    //   };
    // }
  }, [show, onClose]);
  
  return (
    <>
      {show && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-violet-200 p-8 rounded-lg shadow-md">
              <div className="flex justify-end">
                <button onClick={onClose} className="text-violet-700 hover:text-violet-900">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="mt-4">
                <p className="text-lg text-black">{message}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalMessage;
