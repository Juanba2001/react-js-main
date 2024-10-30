
import React from "react";
import { useParams } from "react-router";

import { useItemById } from "../Hooks";


import { ItemDetailContainer } from "../componentes";

export const ItemDetail = () => {
  const { id } = useParams();

  const { product } = useItemById(id);

  return  < ItemDetailContainer item={product} />;
};

