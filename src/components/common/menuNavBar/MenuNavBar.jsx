import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from '@mui/icons-material/Menu';

export default function MenuNavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Mancuernas</MenuItem>
        <MenuItem onClick={handleClose}>Pesas Rusas</MenuItem>
        <MenuItem onClick={handleClose}>Barras</MenuItem>
        <MenuItem onClick={handleClose}>Discos</MenuItem>
        <MenuItem onClick={handleClose}>Elasticos</MenuItem>
        <MenuItem onClick={handleClose}>Pelotas</MenuItem>
        <MenuItem onClick={handleClose}>Colchonetas</MenuItem>
      </Menu>
    </div>
  );
}
