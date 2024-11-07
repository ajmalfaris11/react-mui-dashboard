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

// Custom styling for dark theme
const DarkCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#1A1A1A",
  color: "white",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
  "&:hover": {
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.7)",
  },
}));

const DarkButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#FF5722",
  color: "white",
  "&:hover": {
    backgroundColor: "#E64A19",
  },
  borderRadius: "8px",
  padding: "10px 20px",
  fontWeight: "bold",
}));

const DarkTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    backgroundColor: "#333333",
    borderRadius: "8px",
  },
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& .MuiFormLabel-root": {
    color: "#B0B0B0",
  },
  "& .MuiInputBase-root:before": {
    borderBottom: "1px solid #333333",
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
    payment: {
      currency: "USD",
      taxRate: "7.5",
      paymentGateway: "Stripe",
    },
    shipping: {
      freeShipping: true,
      flatRate: 5.99,
      localPickup: false,
      cod:true,
    },
    security: {
      twoFactorAuth: false,
      loginAlerts: true,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const handleCheckboxChange = (section, name) => (e) => {
    setSettings({
      ...settings,
      [section]: { ...settings[section], [name]: e.target.checked },
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
              <DarkTextField
                label="Username"
                fullWidth
                margin="normal"
                value={settings.username}
                name="username"
                onChange={handleChange}
              />
            </Box>
            <DarkTextField
              label="Email"
              fullWidth
              margin="normal"
              value={settings.email}
              name="email"
              onChange={handleChange}
            />
          </CardContent>
        </DarkCard>

        {/* Payment Settings */}
        <DarkCard sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Payment Settings
            </Typography>
            <DarkTextField
              label="Currency"
              fullWidth
              margin="normal"
              value={settings.payment.currency}
              name="currency"
              onChange={(e) =>
                setSettings({
                  ...settings,
                  payment: { ...settings.payment, currency: e.target.value },
                })
              }
            />
            <DarkTextField
              label="Tax Rate (%)"
              fullWidth
              margin="normal"
              value={settings.payment.taxRate}
              name="taxRate"
              onChange={(e) =>
                setSettings({
                  ...settings,
                  payment: { ...settings.payment, taxRate: e.target.value },
                })
              }
            />
            <DarkTextField
              label="Payment Gateway"
              fullWidth
              margin="normal"
              value={settings.payment.paymentGateway}
              name="paymentGateway"
              onChange={(e) =>
                setSettings({
                  ...settings,
                  payment: {
                    ...settings.payment,
                    paymentGateway: e.target.value,
                  },
                })
              }
            />
          </CardContent>
        </DarkCard>

        {/* Shipping Settings */}
        <DarkCard sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Shipping Settings
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={settings.shipping.freeShipping}
                  onChange={handleCheckboxChange("shipping", "freeShipping")}
                  sx={{
                    color: "#FF5722",
                    "&.Mui-checked": { color: "#FF5722" },
                  }}
                />
              }
              label="Enable Free Shipping"
              sx={{ color: "white" }}
            />
            <DarkTextField
              label="Flat Rate Shipping Cost"
              fullWidth
              margin="normal"
              value={settings.shipping.flatRate}
              name="flatRate"
              onChange={(e) =>
                setSettings({
                  ...settings,
                  shipping: { ...settings.shipping, flatRate: e.target.value },
                })
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={settings.shipping.localPickup}
                  onChange={handleCheckboxChange("shipping", "localPickup")}
                  sx={{
                    color: "#FF5722",
                    "&.Mui-checked": { color: "#FF5722" },
                  }}
                />
              }
              label="Enable Local Pickup"
              sx={{ color: "white" }}
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={settings.shipping.cod}
                  onChange={handleCheckboxChange("shipping", "localPickup")}
                  sx={{
                    color: "#FF5722",
                    "&.Mui-checked": { color: "#FF5722" },
                  }}
                />
              }
              label="COD"
              sx={{ color: "white" }}
            />
          </CardContent>
        </DarkCard>

        {/* Security Settings */}
        <DarkCard sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Security Settings
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={settings.security.twoFactorAuth}
                  onChange={handleCheckboxChange("security", "twoFactorAuth")}
                  sx={{
                    color: "#FF5722",
                    "&.Mui-checked": { color: "#FF5722" },
                  }}
                />
              }
              label="Enable Two-Factor Authentication"
              sx={{ color: "white" }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={settings.security.loginAlerts}
                  onChange={handleCheckboxChange("security", "loginAlerts")}
                  sx={{
                    color: "#FF5722",
                    "&.Mui-checked": { color: "#FF5722" },
                  }}
                />
              }
              label="Enable Login Alerts"
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
