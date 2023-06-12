import * as React from "react";
import { NavBar } from "./NavBar";

const pages = [
  "Mancuernas",
  "Pesas Rusas",
  "Barras",
  "Elasticos",
  "Pelotas",
  "Colchonetas",
];

export function NavBarContainer() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <NavBar
      anchorElNav={anchorElNav}
      handleCloseNavMenu={handleCloseNavMenu}
      handleOpenNavMenu={handleOpenNavMenu}
      pages={pages}
    />
  );
}
