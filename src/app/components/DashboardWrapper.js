import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
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
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const drawerWidth = 240;

export default function DashboardWrapper({ title, children }) {
  return (
    <Box sx={{ display: "flex" }}>
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

          {/* LinkedIn Icon */}
          <IconButton
            href="https://www.linkedin.com/in/ajmal-faris-31b0a22b5/" 
            target="_blank"
            sx={{ color: "white", "&:hover": { color: "#0077B5" } }}
          >
            <LinkedInIcon sx={{ fontSize: "22px" }} />
          </IconButton>

          {/* GitHub Icon */}
          <IconButton
            href="https://github.com/ajmalfaris11" 
            target="_blank"
            sx={{
              color: "white",
              "&:hover": { color: "#FF5722" },
              marginRight: "20px",
            }}
          >
            <GitHubIcon sx={{ fontSize: "22px" }} />
          </IconButton>

          {/* Logout Button */}
          <Button
            variant="outlined"
            sx={{
              color: "#FF5722",
              borderColor: "#FF5722",
              "&:hover": {
                backgroundColor: "#FF5722",
                color: "white",
              },
            }}
            href="login"
          >
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
          <Typography
            sx={{ fontSize: "24px", fontWeight: "900", color: "#FF5722" }}
          >
            FashionFriday.In
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton href="/">
              <ListItemIcon
                sx={{ color: title === "Dashboard" ? "#FF5722" : "gray" }}
              >
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton href="Products">
              <ListItemIcon
                sx={{
                  color: title === "PRODUCT MANAGEMENT" ? "#FF5722" : "gray",
                }}
              >
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary={"Products"} sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton href="Orders">
              <ListItemIcon
                sx={{
                  color: title === "Order Management" ? "#FF5722" : "gray",
                }}
              >
                <LocalShippingIcon />
              </ListItemIcon>
              <ListItemText primary={"Orders"} sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton href="Settings">
              <ListItemIcon
                sx={{ color: title === "Settings" ? "#FF5722" : "gray" }}
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
