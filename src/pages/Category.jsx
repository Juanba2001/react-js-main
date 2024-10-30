import React from "react";
import { useItemsByCategory } from "../Hooks";
import { ItemList } from "../componentes/ItemList";
import { useParams } from "react-router";
import { Loader } from "../componentes";

export const Category = () => {
  const { id } = useParams();

  const { productsData, loading } = useItemsByCategory(id);

  return loading ? <Loader /> : <ItemList products={productsData} />;
};