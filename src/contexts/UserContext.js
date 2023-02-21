import React from 'react';

export const UserContext = React.createContext({});

function UserProvider({ children }) {
  const [alunos, setAlunos] = React.useState('Lucas Costa');
  const [qtdAlunos, setQtdAlunos] = React.useState(85);

  return (
    <UserContext.Provider value={{ alunos, setAlunos, qtdAlunos }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
