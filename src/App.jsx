//import NavBar from "./components/NavBar/NavBar";
//import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
//import JsonPlaceHolder from "./components/Fetch/JsonPlaceHolder";
import AsyncAwait from "./components/Fetch/AsyncAwait";
import Nesflic from "./components/Fetch/Nesflic";
import Simpsons from "./components/Fetch/Simpsons";


function App() {
  return (
    <>
        {
          /*
          <NavBar />
          <ItemListContainer greeting={"Nuestros Productos"}/>
          <ItemDetailContainer/>
          */
        }
        
        {
          //<JsonPlaceHolder/>
          //<Nesflic/>
        }
        <AsyncAwait/>
        <Simpsons/>
        
    </>
  );
}

export default App;
