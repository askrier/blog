import Image from "next/image";
import { openSans } from "../styles/fonts";
import Intro from "@/app/intro.mdx";

// Helpful for App Routing structure for Next.js:
// https://nextjs.org/docs/app/getting-started/project-structure#colocation

export default function Home() {
    return (
        <div
            className={openSans.className}
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "48px",
            }}
        >
            <Image
                src={"/profile-stairs.png"}
                width={396}
                height={396}
                alt={""}
                style={{ borderRadius: "16px" }}
            />
            <div>
                <Intro />
            </div>
        </div>
    );
}
