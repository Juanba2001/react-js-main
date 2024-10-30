import { background, Box } from "@chakra-ui/react";
import { ItemList} from "../componentes/ItemList";
import { useEffect, useState } from "react";
import { getAllProducts } from "../services/products.service";
import { Loader } from "../componentes/Loader";
import { ItemListContainer } from "../componentes/item";
import { NavBar } from "../componentes";
import { style } from "framer-motion/client";
import ".././styles/Home.css"

export const Home = () => {
  const [cartItems, setCartItems] = useState(0);
    const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProductsData(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
    <text className="tittle">
    </text>
    <ItemList products={productsData} />
    </>
  );
};






