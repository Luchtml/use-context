import React from 'react';
import { UserContext } from '../../contexts/UserContext';
import Nome from '../Nome/Nome';

const Alunos = () => {
  const { qtdAlunos } = React.useContext(UserContext);

  return (
    <div>
      <h2>Quantidade total de alunos: {qtdAlunos}</h2>

      <Nome />
    </div>
  );
};

export default Alunos;
