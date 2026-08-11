import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/header/Header";
import MainRoutes from "./MainRoutes";



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/*"
          element={
            <div className="App">
              <Header />
              <MainRoutes />
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
