import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouteLogger: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Rota acessada:', location.pathname);
  }, [location]);

  return null;
};

export default RouteLogger;
