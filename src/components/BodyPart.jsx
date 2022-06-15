import React from "react";
import { Stack, Typography } from "@mui/material";

import icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
        borderTop: bodyPart === item && "4px solid #ff2625",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={icon} alt="dumbbel" style={{ width: "40px", height: "40px" }} />
      <Typography
        fontSize="24px"
        color="#3e1212"
        textTransform="capitalize"
        fontWeight="bold"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
