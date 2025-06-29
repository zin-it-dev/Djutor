import React from "react";

import ContentLayout from "../layouts/ContentLayout";

const specialties = [
    "Cardiology",
    "Dermatology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
    "Psychiatry",
    "ENT",
    "Gynecology",
];

const Speciality: React.FC = () => {
    return (
        <ContentLayout
            title="Find by Speciality"
            description="Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free."
        >
            <ul className="row list-unstyled gx-3 gy-4">
                {specialties.map((item, index) => (
                    <li key={index} className="col-6 col-md-4 col-lg-3">
                        <div className="border rounded p-3 text-center bg-light h-100 shadow-sm">
                            <strong>{item}</strong>
                        </div>
                    </li>
                ))}
            </ul>
        </ContentLayout>
    );
};

export default Speciality;
