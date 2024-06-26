// src/components/RegisterPage.tsx
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { handleRegister } from '../services/aurhService';
import backgroundImage from '../assets/images/backgroundImage.jpg';
import { UserDTO } from '../dtos/userRegister';
import ModalMessage from './modalMessage';



const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  // const navigate = useNavigate();

  
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userDto  = createUserDTO();
      
      await handleRegister(userDto)
      setModalMessage('Cadastro realizado com sucesso!');
      setModalShow(true);
      setEmail('');
      setName('');
      setAddress('');
      setCity('');
      setCpf('');
      setPassword('');
      setPasswordConfirm('');
      setPhone('')
      
     
    } catch (error) {
      console.error('Erro ao fazer login:', error);
  
      setModalMessage('Erro ao cadastrar usuário. Por favor, tente novamente.');
      setModalShow(true);
    }
  };
  
  const createUserDTO = (): UserDTO => {
    const userDTO: UserDTO = {
      name,
      email,
      address,
      city,
      cpf,
      password,
      phone,
  
    };
    return userDTO;
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100"  style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Faça o seu cadastro</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="name"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mb-4 rounded-md border"
          />
          <input
            type="cpf"
            placeholder="Digite seu cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            className="w-full p-2 mb-4 rounded-md border"
          />
          <input
            type="phone"
            placeholder="Digite seu telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 mb-4 rounded-md border"
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 rounded-md border"
          />
          <input
            type="city"
            placeholder="Digite sua cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-2 mb-4 rounded-md border"
          />
          <input
            type="address"
            placeholder="Digite seu endereço"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 mb-4 rounded-md border"
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 rounded-md border"
          />
          <input
            type="password"
            placeholder="Confirme sua senha"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            className="w-full p-2 mb-4 rounded-md border"
          />
          <button
            type="submit"
            className="w-full bg-violet-700 text-white py-2 rounded-md hover:bg-violet-900"
          >
            Registrar
          </button>
        </form>
      </div>
      <ModalMessage show={modalShow} onClose={() => setModalShow(false)} message={modalMessage} /> 

    </div>
  );
};

export default RegisterPage;
  