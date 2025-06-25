import React from "react";

import Jumbotron from "@/components/ui/Jumbotron";
import Speciality from "@/components/ui/Speciality";
import List from "@/components/ui/List";

const Home: React.FC = () => {
    return (
        <>
            <Jumbotron />
            <Speciality />
            <List />
        </>
    );
};

export default Home;
