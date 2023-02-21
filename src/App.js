import React from 'react';
import Alunos from './components/Alunos/Alunos';
import UserProvider from './contexts/UserContext';

const App = () => {
  return (
    <UserProvider>
      <div>
        <h1>Escola</h1>
        <hr />
        <Alunos/>
      </div>
    </UserProvider>
  );
};

export default App;
