import React from "react";

import ContentLayout from "../layouts/ContentLayout";
import useDoctors from "@/hooks/useDoctors";
import type { IDoctor } from "@/types/doctor.type";

const List: React.FC = () => {
    const { data, isPending } = useDoctors();

    return (
        <ContentLayout
            title="Top Doctors to Book"
            description="Simply browse through our extensive list of trusted doctors."
        >
            {isPending ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {data.map((doc: IDoctor) => (
                        <li key={doc.bio}>{doc.user.username}</li>
                    ))}
                </ul>
            )}
        </ContentLayout>
    );
};

export default List;
