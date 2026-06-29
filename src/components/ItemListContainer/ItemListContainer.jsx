import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getByCategory, getProducts } from "../../services/ProductService";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  //tomamos "category" del useParams para poder filtrar
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    //Usanmos la funcion con 2 uso: trae todo o filtra si category existe
    getByCategory(category)
      .then((data) => setProducts(data))
      .catch((err) => console.log("Hubo un error:", err))
      .finally(() => setLoading(false));
  }, [category]);
  //👉No olvidar agregar "category" como variable de dependencias para que renderice nuevamente el container si cambia category
  //En caso de usar el filtro por categorias
  //CON LA API FAKESTORE
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data))
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, []);

  //CON LA API DUMMYJSON (OJO con respuesta en objeto. Atributo de imagen en array)
  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data.products)) //dummyjson devuelve un objeto con clave products que tiene el array
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, []);

  //Con el JSON LOCAL
  // useEffect(() => {
  //   setLoading(true);

  //   fetch("/data/products.json")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data))
  //     .catch((err) => console.log("Hubo un error:", err))
  //     .finally(() => setLoading(false));
  // }, []);


  if (loading) return <p>Cargando...</p>;

  return (
    <section>
      <ItemList products={products} />
    </section>
  );
};
