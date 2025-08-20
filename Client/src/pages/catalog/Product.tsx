import { AddShoppingCart, Search } from "@mui/icons-material";
import { IProduct } from "../../model/IProduct";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router";

interface Props {
  product: IProduct;
}

export default function Product({ product }: Props) {
  return (
    <Card>
      <CardMedia
        sx={{ height: 160, backgroundSize: "contain" }}
        image={`http://localhost:5291/images/${product.imageUrl}`}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="h2"
          color="text.secondary"
        >
          {product.name}
        </Typography>
        <Typography variant="body2" color="secondary">
          {(product.price / 100).toFixed(2)} ₺
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          startIcon={<AddShoppingCart />}
          color="success"
        >
          Add to cart
        </Button>
        <Button /*Buraya yazdıgım Butona tıkladıgımda direk olarak ilgili ürünün 
        Product Details sayfasına gidecek */
          component={Link}
          to={`/catalog/${product.id}`}
          variant="outlined"
          size="small"
          startIcon={<Search />}
          color="primary"
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}
/* Yukardaki Listede ürün Aktif degil ise ekrana ürün aktif degildir  yazacak*/
