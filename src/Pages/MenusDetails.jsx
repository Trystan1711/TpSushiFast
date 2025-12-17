import { useParams } from "react-router-dom";
import { useMenus } from "../hooks/use.Menus";
import "./MenusDetails.css";

function MenuDetails() {
  const { id } = useParams();
  const { menus, loading, error } = useMenus();

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  const menu = menus.find((m) => m.id === Number(id));

  if (!menu) return <p>Menu introuvable.</p>;

  return (
    <section className="menu-details-page container mt-4">
      <header className="menu-details-header">
        <p className="details-kicker">DÉTAIL DU MENU</p>
        <h1 className="details-title">{menu.nom}</h1>
      </header>

      <div className="row g-4 align-items-start">
        <div className="col-md-5">
          <div className="details-image-wrapper">
            <img
              src={`/${menu.image}.jpg`}
              className="details-image"
              alt={menu.nom}
            />
          </div>

          <div className="details-meta mt-3">
            <p className="details-price">
              <span>Prix</span>
              <strong>{menu.prix.toFixed(2)} €</strong>
            </p>
            <p className="details-pieces">
              <span>Nombre de pièces</span>
              <strong>{menu.pieces}</strong>
            </p>
          </div>
        </div>

        <div className="col-md-7">
          <div className="details-card">
            <h2>Aliments inclus</h2>
            <ul className="details-list">
              {menu.aliments.map((a, i) => (
                <li key={i}>
                  <span className="details-qty">{a.quantite}×</span>
                  <span className="details-name">{a.nom}</span>
                </li>
              ))}
            </ul>

            <h3>Saveurs</h3>
            <p className="details-flavors">{menu.saveurs.join(", ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuDetails;
