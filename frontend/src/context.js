import React, { createContext, useContext, useState } from 'react';
const MyContext = createContext();

export function useMyContext() {
  return useContext(MyContext);
}

export function MyContextProvider({ children }) {
  
  const [todoList,setTodoList] = useState([{}])


 

  return (
    <MyContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </MyContext.Provider>
  );
}
