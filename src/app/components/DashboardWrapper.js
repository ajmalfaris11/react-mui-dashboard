import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store";

const drawerWidth = 240;

export default function DashboardWrapper({ title, children }) {
  return (
    <Box sx={{ display: "flex"}}>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "black",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "center",
              fontWeight: "900",
              fontSize: "28px",
              color: "white",
            }}
          >
            {title}
          </Typography>

          <Button sx={{ bgcolor: "white", color: "black" }} href="login">
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "black",
            color: "white",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "0",
            backgroundColor: "black",
          }}
        >
          <StoreIcon sx={{ color: "white" }} />
          <Typography
            sx={{ fontSize: "24px", fontWeight: "900", color: "white" }}
          >
            MYstore
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton href="/">
              <ListItemIcon
                sx={{ color: title === "Dashboard" ? "white" : "gray" }}
              >
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton href="Products">
              <ListItemIcon
                sx={{ color: title === "PRODUCT MANAGEMENT" ? "white" : "gray" }}
              >
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary={"Products"} sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton href="Orders">
              <ListItemIcon
                sx={{ color: title === "Order Management" ? "white" : "gray" }}
              >
                <LocalShippingIcon />
              </ListItemIcon>
              <ListItemText primary={"Orders"} sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton href="Settings">
              <ListItemIcon
                sx={{ color: title === "Settings" ? "white" : "gray" }}
              >
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={"Settings"} sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "black",
          p: 3,
        }}
      >
        <Toolbar />
        <div>{children}</div>
      </Box>
    </Box>
  );
}
