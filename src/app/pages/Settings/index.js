import React, { useState } from "react";
import DashboardWrapper from "../../components/DashboardWrapper";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Checkbox,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/system";

// Custom styling for a modern dark theme
const DarkCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#1A1A1A", // Dark background
  color: "white", // Light text
  borderRadius: "10px", // Rounded corners
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Soft shadow for modern feel
  "&:hover": {
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.7)", // Hover shadow effect
  },
}));

const DarkButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#FF5722", // Fashion-forward color (orange/red for action)
  color: "white",
  "&:hover": {
    backgroundColor: "#E64A19", // Darker on hover
  },
  borderRadius: "8px",
  padding: "10px 20px",
  fontWeight: "bold",
}));

const DarkTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    backgroundColor: "#333333", // Dark background for inputs
    borderRadius: "8px", // Rounded corners for inputs
  },
  "& .MuiInputBase-input": {
    color: "white", // White text for input fields
  },
  "& .MuiFormLabel-root": {
    color: "#B0B0B0", // Lighter color for labels
  },
  "& .MuiInputBase-root:before": {
    borderBottom: "1px solid #333333", // Subtle border at the bottom
  },
}));

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    username: "AjmalFaris11",
    email: "ajmalfaris.me@gmail.com",
    notifications: {
      orderUpdates: true,
      promotions: false,
      newsletter: true,
    },
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setSettings({
      ...settings,
      notifications: { ...settings.notifications, [name]: checked },
    });
  };

  const handleSaveChanges = () => {
    alert("Settings updated successfully!");
  };

  return (
    <DashboardWrapper title="Settings">
      <Box component="main" sx={{ flexGrow: 1, px: { xs: 2, md: 3 }, py: 3 }}>
        {/* Profile Settings */}
        <DarkCard sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Profile Settings
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                sx={{ bgcolor: "#FF5722", width: 50, height: 50, mr: 2 }}
              />
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                value={settings.username}
                name="username"
                onChange={handleChange}
                sx={{
                  mb: 2,
                  "& .MuiInputBase-root": {
                    borderColor: "white", // Border color for the input
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "grey", // Outline border color for the input
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "grey", // Label color
                  },
                }}
                InputProps={{
                  style: {
                    color: "#FF5722", // Input text color
                  },
                }}
              />
            </Box>
            <DarkTextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={settings.email}
              name="email"
              onChange={handleChange}
            />
          </CardContent>
        </DarkCard>

        {/* Password Settings */}
        <DarkCard sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Change Password
            </Typography>
            <DarkTextField
              label="New Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              value={settings.password}
              name="password"
              onChange={handleChange}
            />
            <DarkButton
              variant="contained"
              onClick={handleSaveChanges}
              sx={{ mt: 2 }}
            >
              Save Password
            </DarkButton>
          </CardContent>
        </DarkCard>

        {/* Notification Settings */}
        <DarkCard sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Notification Settings
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={settings.notifications.orderUpdates}
                  onChange={handleNotificationChange}
                  name="orderUpdates"
                  sx={{
                    color: "#FF5722", // Custom color for the checkbox
                    "&.Mui-checked": {
                      color: "#FF5722", // Custom color for the checked state
                    },
                  }}
                />
              }
              label="Order Updates"
              sx={{ color: "white" }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={settings.notifications.promotions}
                  onChange={handleNotificationChange}
                  name="promotions"
                  sx={{
                    color: "#FF5722", 
                    "&.Mui-checked": {
                      color: "#FF5722",
                    },
                  }}
                />
              }
              label="Promotions"
              sx={{ color: "white" }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={settings.notifications.newsletter}
                  onChange={handleNotificationChange}
                  name="newsletter"
                  sx={{
                    color: "#FF5722", 
                    "&.Mui-checked": {
                      color: "#FF5722", 
                    },
                  }}
                />
              }
              label="Newsletter"
              sx={{ color: "white" }}
            />
          </CardContent>
        </DarkCard>

        {/* Save All Changes Button */}
        <DarkButton
          variant="contained"
          sx={{ width: "100%", mt: 2 }}
          onClick={handleSaveChanges}
        >
          Save All Changes
        </DarkButton>
      </Box>
    </DashboardWrapper>
  );
}
