import type { Metadata } from "next";
import "./pages.css";
import { Open_Sans, Lemon } from "next/font/google";
import { TopBar } from "@/components/TopBar";

export const metadata: Metadata = {
    title: "Andrew's Site",
    description: "Really not that much else",
};

const openSans = Open_Sans({
    subsets: ["latin"],
    variable: "--var-open-sans",
    display: "swap",
});

const lemon = Lemon({
    subsets: ["latin"],
    weight: "400",
    variable: "--var-lemon",
    display: "swap",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${openSans.variable} ${lemon.variable}`}>
            <body style={{ padding: "0px 32px" }}>
                <TopBar />
                {children}
            </body>
        </html>
    );
}
