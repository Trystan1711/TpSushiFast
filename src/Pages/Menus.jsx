
import { useMenus } from "../hooks/use.Menus";
import "./Menus.css";

function Menu() {
  const { menus, loading, error } = useMenus();

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  const filteredMenus = menus.filter(menu =>
    menu.saveurs.some(s =>
      s.toLowerCase() === "avocat" || s.toLowerCase() === "coriandre"
    )
  );

  const prixTotal = menus
    .filter(menu => menu.pieces < 13)
    .reduce((acc, menu) => acc + menu.prix, 0);

  return (
    <section className="menus-page container mt-5">
      <header className="menus-header mb-4">
        <h1 className="menus-title">Analyse Menus</h1>
      </header>

      <div className="menus-content row g-4">
        <div className="col-md-7">
          <div className="menus-card">
            <h2>Menus avec Avocat ou Coriandre</h2>
            <ul className="menus-list">
              {filteredMenus.map(menu => (
                <li key={menu.id} className="menus-item">
                  <span className="menus-item-name">{menu.nom}</span>
                  <span className="menus-item-price">{menu.prix.toFixed(2)} €</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-md-5">
          <aside className="menus-summary">
            <h3>Prix total des menus &lt; 13 pièces</h3>
            <p className="menus-total">{prixTotal.toFixed(2)} €</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Menu;