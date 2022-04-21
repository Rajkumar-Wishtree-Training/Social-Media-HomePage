import { Mail,  Notifications } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const ModifiedTypo = styled(Typography)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block"
  },
}));
const ModifiedMenuIcon = styled(MenuIcon)(({theme}) => ({
  display : "block",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  },

}))
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  margin : '0 10px',
  width: "40vmax",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",

  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <ModifiedTypo variant="h6">
          RK Patel
        </ModifiedTypo>
        <ModifiedMenuIcon/>
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail color="main" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications color="main" />
          </Badge>
          <Avatar
            onClick = {e => setOpen(true)}
            sx={{ width: "30px", height: "30px" }}
            alt="Remy Sharp"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          />
        </Icons>
        <UserBox onClick={e => setOpen(true)}>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            alt="Remy Sharp"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          />
          <Typography variant="span">Rajkumar</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=> setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
