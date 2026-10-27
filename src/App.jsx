import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"

function App() {

  return (

    <div className="App">

      {/* Navbar */}
      <Navbar />

      <main>

        <ItemListContainer greeting = "Welcome to RePlay"/>

      </main>

    </div>

  );
}

export default App;
