import React from 'react';
import Alunos from './components/Alunos/Alunos';

const App = () => {
  const [nomeAluno, setNomeAluno] = React.useState('Thamires Thomaz');
  return (
    <div>
      <h1>Escola</h1>
      <hr />
      <Alunos nome={nomeAluno} mudaNome={setNomeAluno}/>
    </div>
  );
};

export default App;
