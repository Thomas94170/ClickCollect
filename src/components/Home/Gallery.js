import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../lib/queries";
import Card from "./Card";

const styles = {
  gallery: {
    height: "calc(100vh - 120px)",
    overflow: "scroll",
  },
};

// main
function Gallery() {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { category: "Women" },
  });
  if (loading) {
    return <div>Chargement...</div>;
  }
  if (error) {
    return <div>Erreur dans le chargement {+error}</div>;
  }
  if (!data) {
    return <div>Pas de résultat</div>;
  }
  console.dir(data);
  return (
    <div className="col-md-8 order-md-2 col-lg-9">
      <div className="container-fluid" style={styles.gallery}>
        <div className="row">
          {data?.products.map((product) => (
            <Card {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Gallery;
