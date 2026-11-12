
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Navbar />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <ItemListContainer />
                </>
              }
            />

            <Route
              path="/item/:productId"
              element={<ItemDetailContainer />}
            />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
