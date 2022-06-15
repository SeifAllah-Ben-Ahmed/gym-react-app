import { Box, Typography, Button } from "@mui/material";

import Banner from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { xs: "70px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#ff2625" fontSize="26px" fontWeight="600">
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        mb="23px"
        mt="30px"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3}>
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625", padding: " 10px" }}
      >
        Explore Exercies
      </Button>
      <img src={Banner} alt="Fitness Banner" className="hero-banner-img" />
      <Typography
        fontWeight="600"
        color="#ff2625"
        fontSize="200px"
        sx={{
          opacity: "0.15",
          display: { lg: "block", xs: "none" },
        }}
      >
        Exercises
      </Typography>
    </Box>
  );
};

export default HeroBanner;
