import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { exerciseOptions, videoOptions, fetchData } from "../utils/fetchData";

import Details from "../components/Details";
import SimilarExercises from "../components/SimilarExercises";
import ExerciseVideos from "../components/ExerciseVideos";

const ExerciseDetail = () => {
  const [exerciseDetails, setExerciseDetails] = React.useState({});
  const [exerciseVideos, setExerciseVideos] = React.useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = React.useState([]);
  const [equipmentExercises, setEquipmentExercises] = React.useState([]);
  const { id } = useParams();
  console.log({ targetMuscleExercises, equipmentExercises });
  React.useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetails(exerciseDetailData);

      const youtubeVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
        videoOptions
      );
      setExerciseVideos(youtubeVideoData.contents);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equimentExercisesData);
    };
    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Details
        exerciseVideos={exerciseVideos}
        exerciseDetails={exerciseDetails}
      />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetails.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
