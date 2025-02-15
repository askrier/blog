import Image from "next/image";
import { openSans } from "../styles/fonts";

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
                <h1>Hello!</h1>
                <p>
                    my name is Andrew Krier, i’m from Minnesota, and i love
                    making music, playing sports, and spending time with
                    friends.
                </p>
                <p>
                    i’m currently a software engineer for Duolingo in
                    Pittsburgh, Pennsylvania.
                </p>
                <p>other hobbies include:</p>
                <ul style={{ listStyleType: "-moz-initial" }}>
                    <li>too many fantasy football leagues</li>
                    <li>relying on legos for interior decoration</li>
                    <li>ranked foosball</li>
                </ul>
            </div>
        </div>
    );
}
