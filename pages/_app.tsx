import { Open_Sans, Lemon } from "next/font/google";
import { AppProps } from "next/app";

// Next.js docs on page-based routing:
// https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts

export const openSans = Open_Sans({
    subsets: ["latin"],
    variable: "--var-open-sans",
    display: "swap",
});

export const lemon = Lemon({
    subsets: ["latin"],
    weight: "400",
    variable: "--var-lemon",
    display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main className={`${openSans.variable} ${lemon.variable}`}>
            <Component {...pageProps} />
        </main>
    );
}
