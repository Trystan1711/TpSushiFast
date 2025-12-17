import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Accueil from './Pages/Accueil.jsx'
import Menus from './Pages/Menus.jsx'
import MenuDetails from './Pages/MenusDetails.jsx'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Header />

      <div className="content" style={{ paddingTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/menu/:id" element={<MenuDetails />} />
          <Route path="/liste" element={<Menus />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
