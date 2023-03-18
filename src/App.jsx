import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import ShowCharacters from "./components/ShowCharacters";
function App() {
  const [nombre, setNombre] = useState('')
  return (
    <div className="container">
      <h1>Rick and Morty</h1>
      <Formulario setNombre={setNombre} />
      <ShowCharacters nombre={nombre} />
    </div>
  );
}

export default App;
