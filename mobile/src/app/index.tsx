import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

import axios from "axios";

type UserProps = {
    avatar: string;
    email: string;
    username: string;
    role: string;
};

type DoctorProps = {
    id: number;
    bio: string;
    user: UserProps;
};

const Home = () => {
    const [doctors, setDoctors] = useState<DoctorProps[]>([]);
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {
        try {
            const response = await axios.get(`${apiUrl}/doctors/`);
            console.log(response.data);
            setDoctors(response.data);
        } catch (error) {
            console.error("Failed to fetch doctors:", error);
        }
    };

    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl font-bold text-blue-500">
                Welcome to Djutor!
            </Text>

            {doctors?.map((doctor: DoctorProps) => (
                <View key={doctor.id} className="mb-4 items-center">
                    <Text className="text-lg font-semibold text-black">
                        {doctor.user.username}
                    </Text>
                    <Text className="text-gray-700 italic">{doctor.bio}</Text>
                    <Text className="text-sm text-gray-500">
                        {doctor.user.email}
                    </Text>
                </View>
            ))}
        </View>
    );
};

export default Home;
