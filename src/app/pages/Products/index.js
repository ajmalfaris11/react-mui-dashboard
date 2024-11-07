import React from "react";
import DashboardWrapper from "../../components/DashboardWrapper";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";

export default function ProductsPage() {
  const products = [
    { id: 1, name: "Air Max 90", category: "Sneakers", price: "$120", stock: 10 },
    { id: 2, name: "Classic Boots", category: "Boots", price: "$150", stock: 5 },
    { id: 3, name: "Casual Canvas", category: "Casual", price: "$80", stock: 15 },
    { id: 4, name: "Trail Runner", category: "Running", price: "$110", stock: 8 },
    { id: 5, name: "Leather Loafers", category: "Formal", price: "$200", stock: 4 },
    { id: 6, name: "Hi-Top Sneakers", category: "Sneakers", price: "$130", stock: 12 },
    { id: 7, name: "Winter Boots", category: "Boots", price: "$180", stock: 6 },
    { id: 8, name: "Athletic Trainer", category: "Running", price: "$90", stock: 18 },
    { id: 9, name: "Slip-On Casual", category: "Casual", price: "$70", stock: 20 },
    { id: 10, name: "Classic Derby", category: "Formal", price: "$210", stock: 3 },
    { id: 11, name: "Retro Sneakers", category: "Sneakers", price: "$115", stock: 14 },
    { id: 12, name: "Hiking Boots", category: "Boots", price: "$160", stock: 9 },
    { id: 13, name: "Gym Trainer", category: "Sports", price: "$100", stock: 7 },
    { id: 14, name: "Chukka Boots", category: "Boots", price: "$170", stock: 5 },
    { id: 15, name: "Canvas Sneakers", category: "Casual", price: "$75", stock: 16 },
    { id: 16, name: "Suede Loafers", category: "Formal", price: "$220", stock: 2 },
    { id: 17, name: "Basketball Sneakers", category: "Sports", price: "$140", stock: 13 },
    { id: 18, name: "Running Shoes", category: "Running", price: "$95", stock: 11 },
    { id: 19, name: "Moccasin Loafers", category: "Casual", price: "$85", stock: 17 },
    { id: 20, name: "Formal Oxfords", category: "Formal", price: "$230", stock: 3 },
  ];

  return (
    <DashboardWrapper title="PRODUCT MANAGEMENT">
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "black",
          px: { xs: 2, md: 4 },
          py: 4,
          color: "white",
        }}
      >
        {/* Product Table */}
        <TableContainer
          component={Paper}
          elevation={6}
          sx={{
            bgcolor: "#1c1c1c",
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}
        >
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  bgcolor: "#333",
                }}
              >
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>ID</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Product Name</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Category</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Price</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Stock</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{
                    "&:hover": {
                      bgcolor: "#2b2b2b",
                    },
                  }}
                >
                  <TableCell sx={{ color: "white" }}>{product.id}</TableCell>
                  <TableCell sx={{ color: "white" }}>{product.name}</TableCell>
                  <TableCell sx={{ color: "white" }}>{product.category}</TableCell>
                  <TableCell sx={{ color: "white" }}>{product.price}</TableCell>
                  <TableCell sx={{ color: "white" }}>{product.stock}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{
                        mr: 1,
                        textTransform: "none",
                        borderRadius: 2,
                        color: "white",
                        borderColor: "gray",
                        "&:hover": {
                          borderColor: "white",
                        },
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "white",
                        color: "black",
                        textTransform: "none",
                        borderRadius: 2,
                        "&:hover": { backgroundColor: "#b71c1c",color:"white" },
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </DashboardWrapper>
  );
}
