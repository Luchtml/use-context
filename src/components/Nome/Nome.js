import React from 'react';

const Nome = ({ nome, mudaNome }) => {
  return (
    <div>
      <span style={{color:'#FF4500'}}>Bem vindo: {nome}</span> <br />
      <button onClick={() => mudaNome('Lucas')}>Trocar Nome</button>
    </div>
  );
};

export default Nome;
