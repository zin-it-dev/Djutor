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
        <section className="my-4 my-md-5 py-4 py-md-5">
            <div className="text-center mb-4">
                <h2 className="title h2 mb-3">{title}</h2>
                {description && (
                    <p className="text-muted fs-6">{description}</p>
                )}
            </div>
            <div>{children}</div>
        </section>
    );
};

export default ContentLayout;
