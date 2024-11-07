import React, { useState } from "react";
import DashboardWrapper from "../../components/DashboardWrapper";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Chip,
  TableSortLabel,
} from "@mui/material";

// Sample customer names and statuses for realism
const sampleCustomers = [
  "Alice Johnson",
  "Bob Smith",
  "Charlie Brown",
  "Diana Prince",
  "Edward Norton",
  "Fiona Apple",
  "George Michael",
  "Hannah Montana",
  "Ivy Green",
  "Jack Sparrow",
  "Kelly Clarkson",
  "Larry Page",
  "Monica Geller",
  "Nina Dobrev",
  "Oscar Wilde",
  "Paula Abdul",
  "Quincy Jones",
  "Rachel Adams",
  "Steve Rogers",
  "Tony Stark",
  "Uma Thurman",
  "Victor Hugo",
  "Wanda Maximoff",
  "Xander Cage",
];
const statuses = ["Shipped", "Processing", "Delivered", "Pending"];

export default function OrdersPage() {

  // Generate 23 orders with sample data
  const [orders, setOrders] = useState(

    Array.from({ length: 23 }, (_, i) => ({
      id: 100 + i + 1,
      customer: sampleCustomers[i % sampleCustomers.length],
      date: `2024-11-${String((i % 30) + 1).padStart(2, "0")}`,
      total: parseFloat((Math.random() * 500).toFixed(2)),
      status: statuses[i % statuses.length],
    }))
  );

  // Sorting state and logic
  const [orderBy, setOrderBy] = useState("id");
  const [orderDirection, setOrderDirection] = useState("asc");

  const handleSort = (property) => {
    const isAsc = orderBy === property && orderDirection === "asc";
    setOrderDirection(isAsc ? "desc" : "asc");
    setOrderBy(property);

    // Sorting logic
    const sortedOrders = [...orders].sort((a, b) => {
      if (a[property] < b[property]) return isAsc ? -1 : 1;
      if (a[property] > b[property]) return isAsc ? 1 : -1;
      return 0;
    });
    setOrders(sortedOrders);
  };

  return (
    <DashboardWrapper title="Order Management">
      <Box component="main" sx={{ flexGrow: 1, px: { xs: 2, md: 3 }, py: 3 }}>
        {/* Orders Table */}
        <TableContainer
          component={Paper}
          elevation={3}
          sx={{ bgcolor: "#1c1c1c", color: "white", borderRadius: 2 }}
        >
          <Table>
            <TableHead>
              <TableRow>
                {["id", "customer", "date", "total", "status"].map((column) => (
                  <TableCell
                    key={column}
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      "&:hover": {
                        color: "blue", 
                      },
                    }}
                  >
                    <TableSortLabel
                      active={orderBy === column}
                      direction={orderBy === column ? orderDirection : "asc"}
                      onClick={() => handleSort(column)}
                      sx={{
                        color: "white",
                        "&.Mui-active": {
                          color: "white",
                        },
                        "&:hover": {
                          color: "grey",
                        },
                        "& .MuiTableSortLabel-icon": {
                          color: "green !important",
                        },
                      }}
                    >
                      {column.charAt(0).toUpperCase() + column.slice(1)}
                    </TableSortLabel>
                  </TableCell>
                ))}

                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  key={order.id}
                  hover
                  sx={{ "&:hover": { bgcolor: "#2a2a2a" } }}
                >
                  <TableCell sx={{ color: "white" }}>{order.id}</TableCell>
                  <TableCell sx={{ color: "white" }}>
                    {order.customer}
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>{order.date}</TableCell>
                  <TableCell sx={{ color: "white" }}>
                    ${order.total.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={order.status}
                      color={
                        order.status === "Shipped"
                          ? "primary"
                          : order.status === "Processing"
                            ? "warning"
                            : order.status === "Delivered"
                              ? "success"
                              : "default"
                      }
                      sx={{ color: "white" }}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        mr: 1,
                        bgcolor: "#1976d2",
                        "&:hover": { bgcolor: "#1565c0" },
                      }}
                    >
                      View
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "red",
                        color: "white",
                        "&:hover": { backgroundColor: "darkred" },
                      }}
                    >
                      Cancel
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
