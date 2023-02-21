import React from 'react';
import { UserContext } from '../../contexts/UserContext';

const Nome = () => {
  const { alunos, setAlunos } = React.useContext(UserContext);

  return (
    <div>
      <span style={{ color: '#FF4500' }}>Bem vindo: {alunos}</span>
      <br />
      <button onClick={() => setAlunos('Thamires Thomaz')}>Trocar nome</button>
    </div>
  );
};

export default Nome;
