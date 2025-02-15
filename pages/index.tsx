import Image from "next/image";
import { openSans } from "../styles/fonts";
import Intro from "@/app/intro.mdx";

// "index.xxx" is keyworded to occupy the "/" branch of whatever folder it's in
// Since this index file is in the root, it's the homepage

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
