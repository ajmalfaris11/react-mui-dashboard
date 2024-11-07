import React, { useState } from "react";
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
          sx={{ bgcolor: "#1A1A1A", color: "white", borderRadius: 2 }}
        >
          <Table>
            <TableHead>
              <TableRow>
                {["id", "customer", "date", "total", "status"].map((column) => (
                  <TableCell
                    key={column}
                    sx={{
                      color: "#B0B0B0",
                      fontWeight: "bold",
                      "&:hover": {
                        color: "#FF5722",
                      },
                      textAlign:"center"
                    }}
                  >
                    <TableSortLabel
                      active={orderBy === column}
                      direction={orderBy === column ? orderDirection : "asc"}
                      onClick={() => handleSort(column)}
                      sx={{
                        color: "#B0B0B0",
                        "&.Mui-active": {
                          color: "#FF5722",
                        },
                        "&:hover": {
                          color: "white",
                        },
                        "& .MuiTableSortLabel-icon": {
                          color: "#FF5722 !important",
                        },
                      }}
                    >
                      {column.charAt(0).toUpperCase() + column.slice(1)}
                    </TableSortLabel>
                  </TableCell>
                ))}

                <TableCell sx={{ color: "#B0B0B0", fontWeight: "bold",textAlign:"center" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  key={order.id}
                  hover
                  sx={{ "&:hover": { bgcolor: "#333333" } }}
                >
                  <TableCell sx={{ color: "white",textAlign:"center" }}>{order.id}</TableCell>
                  <TableCell sx={{ color: "white",textAlign:"center" }}>
                    {order.customer}
                  </TableCell>
                  <TableCell sx={{ color: "white",textAlign:"center" }}>{order.date}</TableCell>
                  <TableCell sx={{ color: "white",textAlign:"center" }}>
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
                          : "error"
                      }
                      sx={{ color: "white", backgroundColor: "#", width:"100%" }}
                    />
                  </TableCell>
                  <TableCell sx={{textAlign:"center"}}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        mr: 1,
                        bgcolor: "#FF5722", 
                        "&:hover": { bgcolor: "#E64A19" },
                      }}
                    >
                      View
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#D32F2F", 
                        color: "white",
                        "&:hover": { backgroundColor: "#C62828" },
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
