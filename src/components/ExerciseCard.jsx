import { Typography, Stack, Chip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Chip
          sx={{
            ml: "21px",
            color: "#fff",
            backgroundColor: "#ffa9a9",
            fontSize: "14px",
            border: "none",
            textTransform: "capitalize",
          }}
          label={exercise.bodyPart}
          variant="outlined"
        />
        <Chip
          sx={{
            ml: "21px",
            color: "#fff",
            backgroundColor: "#fcc757",
            fontSize: "14px",
            border: "none",
            textTransform: "capitalize",
          }}
          label={exercise.target}
          variant="outlined"
        />
      </Stack>
      <Typography
        ml="21px"
        pb="10px"
        color="#000"
        fontWeight="bold"
        textTransform="capitalize"
        fontSize="20px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
