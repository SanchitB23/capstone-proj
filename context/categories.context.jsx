import { createContext, useEffect, useState } from "react";
import { getCollectionAndDocuments } from "../utils/firebase";

export const CategoriesContext = createContext({
  categoriesMap: {},
});
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  useEffect(() => {
    const x = async () => {
      const x = await getCollectionAndDocuments();
      setCategoriesMap(x);
    };
    x().then((r) => {});
  }, []);
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
