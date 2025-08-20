import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Badge,
  Stack,
  Button,
} from "@mui/material";
import { NavLink } from "react-router";

const links = [
  { title: "Home", to: "/" },
  { title: "Catalog", to: "/catalog" },
  { title: "Bonus", to: "/bonus" },
  { title: "About", to: "/about" },
  { title: "Contact", to: "/contact" },
];

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "h6", // Logonun font boyutu ile aynı olsun
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
};

export default function Header() {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Minimalist
          </Typography>

          <Stack direction="row">
            {links.map((link) => (
              <Button
                component={NavLink}
                to={link.to}
                key={link.to}
                sx={navStyles}
              >
                {link.title}
              </Button>
            ))}
          </Stack>
        </Box>

        <Box>
          <IconButton size="large" edge="start" color="inherit">
            <Badge badgeContent={1} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
