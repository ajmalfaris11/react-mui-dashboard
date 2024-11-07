import React, { useState, useEffect } from "react";
import DashboardWrapper from "../../components/DashboardWrapper";
import {
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  Divider,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Badge,
  Pagination,
  Chip,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  Mail as MailIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
} from "@mui/icons-material";

// Styled components for dark theme and cleaner look
const DarkCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#1F1F1F",
  color: "#FFFFFF",
  borderRadius: "12px",
  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.3)",
  "&:hover": {
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
  },
}));

const SearchInput = styled(TextField)(({ theme }) => ({
    backgroundColor: "#333333",
    borderRadius: "20px",
    width: "300px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "20px",
      "& fieldset": {
        borderColor: "#444444",
      },
      "&:hover fieldset": {
        borderColor: "#FF5722",
      },
    },
    "& .MuiOutlinedInput-input": {
      color: "#FFFFFF", // Text color inside the input field set to white
    },
    "& .MuiInputLabel-root": {
      color: "#FFFFFF", // Placeholder color when not focused
    },
    "& .MuiInputLabel-shrink": {
      color: "#FF5722", // Placeholder color when label is shrunk
    },
    "& .MuiInputAdornment-root": {
      color: "#FFFFFF", // Icon color in the input
    },
  }));

const MessagePage = () => {
  const [messages, setMessages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  // Simulate API call for messages
  useEffect(() => {
    const simulatedMessages = [
      {
        id: 1,
        category: "order",
        sender: "Customer1",
        message: "Order #12345 has been shipped",
        status: "unread",
        date: "2024-11-07",
      },
      {
        id: 2,
        category: "order",
        sender: "Customer2",
        message: "Order #12346 is awaiting payment",
        status: "read",
        date: "2024-11-06",
      },
      {
        id: 3,
        category: "support",
        sender: "Customer3",
        message: "Customer support inquiry regarding product delivery",
        status: "unread",
        date: "2024-11-05",
      },
      {
        id: 4,
        category: "stock",
        sender: "Admin",
        message: "Stock for Product A is low",
        status: "unread",
        date: "2024-11-04",
      },
      {
        id: 5,
        category: "promotion",
        sender: "Admin",
        message: "Black Friday sale starts now! 50% off all items.",
        status: "read",
        date: "2024-11-03",
      },
      {
        id: 6,
        category: "order",
        sender: "Customer4",
        message: "Order #12347 has been delivered",
        status: "unread",
        date: "2024-11-02",
      },
      {
        id: 7,
        category: "support",
        sender: "Customer5",
        message: "Help with refund for Order #12348",
        status: "unread",
        date: "2024-11-01",
      },
      {
        id: 8,
        category: "promotion",
        sender: "Admin",
        message: "Limited time offer: 30% off sitewide",
        status: "read",
        date: "2024-10-31",
      },
      {
        id: 9,
        category: "order",
        sender: "Customer6",
        message: "Order #12349 has been placed",
        status: "unread",
        date: "2024-10-30",
      },
      {
        id: 10,
        category: "stock",
        sender: "Admin",
        message: "Restock of Product B completed",
        status: "read",
        date: "2024-10-29",
      },
    ];
    setMessages(simulatedMessages);
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDeleteMessage = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  const handleToggleStatus = (id) => {
    setMessages(
      messages.map((message) =>
        message.id === id
          ? {
              ...message,
              status: message.status === "read" ? "unread" : "read",
            }
          : message
      )
    );
  };

  // Filter the messages based on category and search term
  const filteredMessages = messages.filter((message) => {
    const matchesCategory =
      selectedCategory === "all" || message.category === selectedCategory;
    const matchesSearchTerm = message.message
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  // Paginate the messages
  const messagesPerPage = 5;
  const paginatedMessages = filteredMessages.slice(
    (page - 1) * messagesPerPage,
    page * messagesPerPage
  );

  return (
    <DashboardWrapper title="Messages">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 4,
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Header and Filter/Search */}
        <Box
          sx={{
            mb: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            {/* Category Dropdown */}
            <FormControl sx={{ width: "200px" }}>
              <InputLabel sx={{ color: "#fff" }}>Category</InputLabel>
              <Select
                value={selectedCategory}
                onChange={handleCategoryChange}
                label="Category"
                sx={{
                  backgroundColor: "#333333",
                  color: "#fff",
                  borderRadius: "20px", // Apply same border radius as Search Input
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#444",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#555",
                  },
                  "& .MuiSelect-icon": {
                    color: "#FFF",
                  },
                }}
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="order">Order Updates</MenuItem>
                <MenuItem value="support">Customer Support</MenuItem>
                <MenuItem value="promotion">Promotions</MenuItem>
              </Select>
            </FormControl>

            {/* Search Input */}
            <SearchInput
  value={searchTerm}
  onChange={handleSearchChange}
  label="Search"
  variant="outlined"
  InputProps={{
    endAdornment: (
      <SearchIcon sx={{ color: "#FFF", fontSize: 20 }} />
    ),
  }}
/>
          </Box>
        </Box>

        {/* Messages List */}
        <DarkCard sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 3, color: "#FF6F61" }}>
              Messages
            </Typography>
            <Divider sx={{ borderColor: "#444" }} />
            <List sx={{ mt: 2 }}>
              {paginatedMessages.map((message) => (
                <ListItem
                  key={message.id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor:
                      message.status === "unread" ? "#2E2E2E" : "transparent",
                    borderRadius: "8px",
                    mb: 1,
                    "&:hover": {
                      backgroundColor: "#3C3C3C",
                    },
                  }}
                >
                  <ListItemText
                    primary={`${message.sender}: ${message.message}`}
                    secondary={`Date: ${message.date}`}
                    sx={{ color: "#B0B0B0" }}
                  />
                  <ListItemSecondaryAction>
                    <Chip
                      label={message.status === "read" ? "Read" : "Unread"}
                      color={message.status === "read" ? "success" : "error"}
                      size="small"
                      sx={{ marginRight: 2 }}
                    />
                    <IconButton onClick={() => handleToggleStatus(message.id)}>
                      <Badge
                        badgeContent={message.status === "unread" ? 1 : 0}
                        color="error"
                      >
                        <MailIcon
                          sx={{
                            color:
                              message.status === "unread"
                                ? "#FF6F61"
                                : "#B0B0B0",
                          }}
                        />
                      </Badge>
                    </IconButton>
                    <IconButton onClick={() => handleDeleteMessage(message.id)}>
                      <DeleteIcon sx={{ color: "#FF6F61" }} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </DarkCard>

        {/* Pagination */}
        <Pagination
          count={Math.ceil(filteredMessages.length / messagesPerPage)}
          page={page}
          onChange={(e, value) => setPage(value)}
          sx={{
            mt: 3,
            display: "flex",
            justifyContent: "center",
            "& .MuiPaginationItem-root": {
              color: "#FF5722", // Default color of the pagination items (non-active)
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "#FF5722", // Background color of the selected (active) page
              color: "#FFFFFF", // Color of the selected (active) page
            },
          }}
        />
      </Box>
    </DashboardWrapper>
  );
};

export default MessagePage;
