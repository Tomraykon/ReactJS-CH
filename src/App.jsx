import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"

function App() {

  return (

    <div className="App">

      {/* Navbar */}
      <Navbar />

      <main>

        <Hero />
        <ItemListContainer />

      </main>

    </div>

  );
}

export default App;
