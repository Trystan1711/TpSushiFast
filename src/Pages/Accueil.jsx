import { useState } from "react";
import { useMenus } from "../hooks/use.Menus";
import { Link } from "react-router-dom";
import FiltersSidebar from "../Components/FiltersSidebar";
import "./Accueil.css";

function Accueil() {
  const { menus, loading, error } = useMenus();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [filters, setFilters] = useState({
    saveur: "",      
    priceRange: "",   
    aliment: ""       
  });

  const [sortOrder, setSortOrder] = useState("");

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  const filteredMenus = menus.filter((menu) => {
    if (
      filters.saveur &&
      !menu.saveurs.some(s => s.toLowerCase() === filters.saveur)
    ) return false;

    if (filters.priceRange) {
      if (filters.priceRange === "low" && menu.prix > 13) return false;
      if (filters.priceRange === "mid" && (menu.prix < 15 || menu.prix > 20)) return false;
      if (filters.priceRange === "high" && menu.prix < 24) return false;
    }

    if (filters.aliment) {
      if (!menu.aliments.some(a => a.nom === filters.aliment)) return false;
    }

    return true;
  });

  const sortedMenus = [...filteredMenus].sort((a, b) => {
    if (sortOrder === "asc") return a.prix - b.prix;
    if (sortOrder === "desc") return b.prix - a.prix;
    return 0;
  });

  return (
    <section className="accueil-page container mt-5">
      <div className="accueil-header d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="accueil-title">Les différents menus</h1>
        </div>

        <div className="accueil-actions d-flex flex-column flex-md-row gap-2">
          <button className="btn btn-outline-primary" onClick={() => setIsSidebarOpen(true)}>
             Filtres avancés
          </button>

          <div className="d-flex gap-2 justify-content-end">
            <button
              className={`btn btn-sm ${sortOrder === "asc" ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setSortOrder(sortOrder === "asc" ? "" : "asc")}
            >
              Prix croissant ↑
            </button>
            <button
              className={`btn btn-sm ${sortOrder === "desc" ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setSortOrder(sortOrder === "desc" ? "" : "desc")}
            >
              Prix décroissant ↓
            </button>
          </div>
        </div>
      </div>

      <FiltersSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        filters={filters}
        setFilters={setFilters}
      />

      <div className="row accueil-grid">
        {sortedMenus.map((menu) => (
          <div className="col-md-4 mb-5" key={menu.id}>
            <div className="card h-100">
              <img src={`/${menu.image}.jpg`} className="card-img-top" alt={menu.nom} />
              <div className="card-body">
                <h5 className="card-title"><strong>{menu.nom}</strong></h5>
                <p className="card-text">{menu.pieces} pièces - {menu.prix.toFixed(2)} €</p>
              </div>
              <div className="card-footer text-center">
                <Link to={`/menu/${menu.id}`} className="magic">Voir plus</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Accueil;
