import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const UnderConstructionPage = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/5578/5578703.png" // Add your own construction icon/image path
            alt="Construction Icon"
            style={{ width: "50%", marginBottom: "50px" }}
          />
          <Typography variant="h4" color="textSecondary">
            This page is under construction. Please check back later.
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default UnderConstructionPage;
