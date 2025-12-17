import './FiltersSidebar.css';

function FiltersSidebar({ isOpen, onClose, filters, setFilters }) {
  return (
    <>
      {isOpen && (
        <div className="filters-overlay" onClick={onClose} />
      )}

      <div className={`filters-sidebar ${isOpen ? "open" : ""}`}>
        <div className="p-3">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>Filtres</h4>
            <button className="btn btn-sm btn-danger" onClick={onClose}>
              ✕
            </button>
          </div>

          <div className="mb-3">
            <label className="mb-2">Gamme de prix</label>
            <div className="d-flex flex-column gap-2">
              <button
                className={`btn ${filters.priceRange === "low" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() =>
                  setFilters({
                    ...filters,
                    priceRange: filters.priceRange === "low" ? "" : "low"
                  })
                }
              >
                € Économique (≤ 13€)
              </button>

              <button
                className={`btn ${filters.priceRange === "mid" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() =>
                  setFilters({
                    ...filters,
                    priceRange: filters.priceRange === "mid" ? "" : "mid"
                  })
                }
              >
                €€ Standard (15 - 20€)
              </button>

              <button
                className={`btn ${filters.priceRange === "high" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() =>
                  setFilters({
                    ...filters,
                    priceRange: filters.priceRange === "high" ? "" : "high"
                  })
                }
              >
                €€€ Premium (≥ 24€)
              </button>
            </div>
          </div>

          <div className="mb-3">
            <label className="mb-2">Saveur</label>
            <div className="d-flex gap-2">
              <button
                className={`btn ${filters.saveur === "coriandre" ? "btn-success" : "btn-outline-success"}`}
                onClick={() =>
                  setFilters({
                    ...filters,
                    saveur: filters.saveur === "coriandre" ? "" : "coriandre"
                  })
                }
              >
                Coriandre
              </button>

              <button
                className={`btn ${filters.saveur === "avocat" ? "btn-success" : "btn-outline-success"}`}
                onClick={() =>
                  setFilters({
                    ...filters,
                    saveur: filters.saveur === "avocat" ? "" : "avocat"
                  })
                }
              >
                Avocat
              </button>
            </div>
          </div>

          <div className="mb-3">
            <label className="mb-2">Aliment</label>
            <button
              className={`btn ${filters.aliment === "California Saumon Avocat" ? "btn-warning" : "btn-outline-warning"}`}
              onClick={() =>
                setFilters({
                  ...filters,
                  aliment: filters.aliment === "California Saumon Avocat" ? "" : "California Saumon Avocat"
                })
              }
            >
              California Saumon Avocat
            </button>
          </div>

          <button
            className="btn btn-outline-secondary w-100"
            onClick={() =>
              setFilters({
                saveur: "",
                priceRange: "",
                aliment: ""
              })
            }
          >
            Réinitialiser
          </button>

        </div>
      </div>
    </>
  );
}

export default FiltersSidebar;
