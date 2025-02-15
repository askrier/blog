import Intro from "@/app/intro.mdx";
import "./pages.css";

// "index.xxx" is keyworded to occupy the "/" branch of whatever folder it's in
// Since this index file is in the root, it's the homepage

export default function Home() {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0px 32px",
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
                        href="/"
                        style={{
                            textDecoration: "none",
                            color: "var(--secondary-accent-color)",
                        }}
                    >
                        blog
                    </a>
                </h2>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "48px",
                    flexWrap: "wrap-reverse",
                    minHeight: "70vh",
                }}
            >
                <img
                    src="/profile-stairs.png"
                    alt=""
                    style={{
                        aspectRatio: 1,
                        width: "396px",
                        maxWidth: "90%",
                        borderRadius: "16px",
                    }}
                />
                <div style={{ width: "95%", maxWidth: "432px" }}>
                    <Intro />
                </div>
            </div>
        </>
    );
}
