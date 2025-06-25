import axios from "@/configs/axios";
import { END_POINTS } from "./constants/endpoints";

export const getDoctors = async () => {
    const response = await axios.get(END_POINTS.doctors);
    return response.data;
};
