export const TopBar = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                margin: "auto",
            }}
        >
            <h1>
                <a
                    href="/"
                    style={{
                        textDecoration: "none",
                        color: "var(--primary-accent-color)",
                    }}
                >
                    Andrew Krier
                </a>
            </h1>
            <h2>
                <a
                    href="/blog"
                    style={{
                        textDecoration: "none",
                        color: "var(--secondary-accent-color)",
                    }}
                >
                    blog
                </a>
            </h2>
        </div>
    );
};
