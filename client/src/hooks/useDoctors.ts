import { useQuery } from "@tanstack/react-query";

import { getDoctors } from "@/services/doctor.service";

const useDoctors = () => {
    const { isPending, isError, data, error } = useQuery({
        queryKey: ["doctors"],
        queryFn: getDoctors,
    });

    return { data, isPending, isError, error };
};

export default useDoctors;
