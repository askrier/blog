import Intro from "@/app/intro.mdx";
import "./pages.css";

// Helpful for App Routing structure for Next.js:
// https://nextjs.org/docs/app/getting-started/project-structure#colocation

export default function Home() {
    return (
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
                src="profile-stairs.png"
                alt=""
                style={{
                    aspectRatio: 1,
                    width: "396px",
                    maxWidth: "100%",
                    borderRadius: "16px",
                }}
            />
            <div style={{ width: "100%", maxWidth: "576px" }}>
                <Intro />
            </div>
        </div>
    );
}
