import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LibraryPage from "./pages/LibraryPage";
import EnterpreneurshipPage from "./pages/EnterpreneurshipPage";
import BookDetailViewPage from "./pages/BookDetailViewPage";
import { useState } from "react";
import statusContext from "./assets/context/statusContext";
import nameContext from "./assets/context/nameContext";

function App() {
  const [status, setStatus] = useState("reading");
  const [name, setName] = useState("");
  console.log(setName);

  return (
    <statusContext.Provider value={{ status, setStatus }}>
      <nameContext.Provider value={{ name, setName }}>
        <Router>
          <div className="App" data-testid="app">
            <Routes>
              <Route path="/" element={<LibraryPage />} />
              <Route path="/selected" element={<EnterpreneurshipPage />} />
              <Route path="/detail" element={<BookDetailViewPage />} />
            </Routes>
          </div>
        </Router>
      </nameContext.Provider>
    </statusContext.Provider>
  );
}

export default App;
