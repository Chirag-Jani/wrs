import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import "../style/HomeStyle.css";

const OfferingsCard = ({ title, image, desc, isLeftSide }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        color: "#CFCFCF",
        marginTop: "100px",
      }}
    >
      <Typography
        sx={{
          fontSize: "45px",
          fontFamily: "DMSans-SemiBold",
        }}
      >
        <span className="font-gradiant">Realtor </span>
        {title}
      </Typography>
      {isLeftSide ? (
        <Grid
          container
          sx={{
            padding: "40px",
            marginTop: "40px",
            borderLeft: isLeftSide && "5px solid #0278CE",
            borderRight: !isLeftSide && "5px solid #0278CE",
          }}
        >
          <Grid item xs={12} md={6}>
            <img src={image} alt="" />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              sx={{
                fontFamily: "DMSans-Regular",
                fontSize: "24px",
                color: "#CFCFCF",
                textAlign: "justify",
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {desc}
            </Typography>
            <Button
              sx={{
                backgroundImage: "linear-gradient(to bottom, #DB6041, #BF3328)",
                borderRadius: "33px",
                color: "white",
                width: "200px",
                padding: "15px",
                textTransform: "capitalize",
                fontSize: "20px",
                marginTop: "40px",
              }}
            >
              Explore
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          sx={{
            padding: "40px",
            marginTop: "40px",
            borderLeft: isLeftSide && "5px solid #0278CE",
            borderRight: !isLeftSide && "5px solid #0278CE",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              sx={{
                fontFamily: "DMSans-Regular",
                fontSize: "24px",
                color: "#CFCFCF",
                textAlign: "justify",
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {desc}
            </Typography>
            <Button
              sx={{
                backgroundImage: "linear-gradient(to bottom, #DB6041, #BF3328)",
                borderRadius: "33px",
                color: "white",
                width: "200px",
                padding: "15px",
                textTransform: "capitalize",
                fontSize: "20px",
                marginTop: "40px",
              }}
            >
              Explore
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <img src={image} alt="" />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default OfferingsCard;
