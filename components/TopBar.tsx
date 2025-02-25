import Link from "next/link";

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
                <Link
                    href="/"
                    style={{
                        textDecoration: "none",
                        color: "var(--primary-accent-color)",
                    }}
                >
                    Andrew Krier
                </Link>
            </h1>
            <h2>
                <Link
                    href="/blog"
                    style={{
                        textDecoration: "none",
                        color: "var(--secondary-accent-color)",
                    }}
                >
                    blog
                </Link>
            </h2>
        </div>
    );
};
