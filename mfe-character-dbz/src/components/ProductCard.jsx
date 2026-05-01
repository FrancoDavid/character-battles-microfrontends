import { grey } from "@mui/material/colors";
import { Box, Grid, Typography } from "@mui/material";

function ProductCard({ product }) {
  return (
    <Box
      sx={{
        bgcolor: grey[200],
        padding: "16px",
        marginBottom: "10px",
        borderRadius: "2px",
        transition: "transform 0.2s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 4,
        },
        cursor: "pointer",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Box
            component="img"
            src={product.image}
            alt={product.title}
            sx={{ width: "60px", height: "auto" }}
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
          <Typography variant="h6">${product.price}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductCard;
