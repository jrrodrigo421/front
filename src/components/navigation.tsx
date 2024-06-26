// src/components/Navigation.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => (
  <nav>
    <Link to="/"></Link>
    <Link to="/professional-list">  </Link>
    <Link to="/login">  </Link>
    <Link to="/register">  </Link>
  </nav>
);

export default Navigation;
