import React from "react";

type SectionLayoutProps = {
    title: string;
    description?: string;
    children: React.ReactNode;
};

const ContentLayout: React.FC<SectionLayoutProps> = ({
    title,
    description,
    children,
}: SectionLayoutProps) => {
    return (
        <section className="my-5 py-4">
            <div className="text-center">
                <h2 className="title h2 mb-3">{title}</h2>
                <p className="text-gray-500 fs-6">{description}</p>
            </div>
            <div>{children}</div>
        </section>
    );
};

export default ContentLayout;
