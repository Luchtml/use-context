import React from 'react';
import Nome from '../Nome/Nome';

const Alunos = ({nome, mudaNome}) => {
  return (
    <div>
      <h2>Componente alunos</h2>
      <Nome nome={nome} mudaNome={mudaNome} />
    </div>
  );
};

export default Alunos;
