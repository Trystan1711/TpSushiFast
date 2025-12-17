import { useState, useEffect } from "react";

export function useMenus() {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/boxes.json")
      .then((res) => {
        if (!res.ok) throw new Error("Impossible de charger le JSON");
        return res.json();
      })
      .then((data) => setMenus(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { menus, loading, error };
}
