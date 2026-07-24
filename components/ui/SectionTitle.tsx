type SectionTitleProps = {
    eyebrow: string;
    title: string;
    description?: string;
    align?: "left" | "center";
};

export default function SectionTitle({
    eyebrow,
    title,
    description,
    align = "center",
}: SectionTitleProps) {

    const alignment =
        align === "left"
            ? "max-w-3xl text-left"
            : "mx-auto max-w-3xl text-center";

    return (
        <div className={alignment}>
            <p className="section-eyebrow">
                {eyebrow}
            </p>

            <h2 className="section-title">
                {title}
            </h2>

            {description && (
                <p className="section-description">
                    {description}
                </p>
            )}
        </div>
    );
}