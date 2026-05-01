import { useEffect } from "react";
import { useState } from "react";

import { grey } from "@mui/material/colors";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

import { getProducts } from "./services/services";
import ProductCard from "./components/ProductCard";
import { Product } from "./interfaces/Product";

function DbzApp() {
  // const handleAttackClick = () => {
  //   console.log("click");
  //   window.dispatchEvent(new CustomEvent("battle:attack-player-one"));
  // };

  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <Grid container sx={{ padding: "20px" }}>
      <Grid item xs={12} sx={{ padding: "20px" }}>
        <Card sx={{ bgcolor: grey[300] }}>
          <CardContent>
            <Grid item xs={12}>
              <Typography
                align="center"
                variant="h3"
                component="h3"
                sx={{ margin: "20px 0 20px" }}
              >
                Stuff Jimmy's
              </Typography>
            </Grid>
            {products?.map((product) => (
              <ProductCard product={product} />
            ))}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default DbzApp;
