import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { getProducts } from "./services/services";
import { useEffect } from "react";
import { useState } from "react";

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
        <Card sx={{ bgcolor: "white" }}>
          <CardContent>
            <Typography
              variant="h5"
              component="h3"
              sx={{ margin: "20px 0 20px" }}
            >
              Jimmy's
            </Typography>
            {products?.map((product) => (
              <Grid container spacing={3} sx={{ margin: "20px 0 8px" }}>
                <Grid item xs={6}>
                  <Box
                    component="img"
                    src={product.image}
                    alt="Descripción"
                    sx={{ width: "30px", height: "auto" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", textWrap: "wrap" }}
                  >
                    {product.title}
                  </Typography>
                  <Typography variant="body2">{product.category}</Typography>
                </Grid>
              </Grid>
            ))}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default DbzApp;
