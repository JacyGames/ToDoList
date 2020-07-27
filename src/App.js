import React from 'react';
import ListHeader from "./components/ListHeader/LIstHeader";
import ToDoContainer from "./components/ToDoContainer/ToDoContainer";

function App() {
  return (
    <div className={"container-lg"}>
      <ListHeader />

      <ToDoContainer />

    </div>
  );
}

export default App;
