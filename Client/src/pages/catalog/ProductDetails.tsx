import {
  CircularProgress,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IProduct } from "../../model/IProduct";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5291/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]); /* Kullanacagımız adres CatalogPage te bulunuyordu ve onu aldım */

  if (loading) return <CircularProgress />;
  if (!product) return <Typography variant="h6">Product not found</Typography>;

  return (
    <Grid2 container spacing={8}>
      <Grid2 size={{ lg: 4, md: 5, sm: 6, xs: 12 }}>
        <img
          src={`http://localhost:5291/images/${product.imageUrl}`}
          alt={product.name}
          style={{ width: "100%", height: "auto" }}
        />
      </Grid2>

      <Grid2 size={{ lg: 8, md: 7, sm: 6, xs: 12 }}>
        <Typography variant="h4">{product.name}</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h4" color="secondary">
          {(product.price / 100).toFixed(2)} ₺
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>{product.name}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Stock</TableCell>
                <TableCell>{product.stock}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>{product.description}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid2>
    </Grid2>
  );
}
