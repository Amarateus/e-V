import { ItemListContainer } from "./components/layout/itemListContainer/ItemListContainer";
import { NavBar } from "./components/layout/navBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Mateo"}/>
    </>
  );
}

export default App;
