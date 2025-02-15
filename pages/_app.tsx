import { Open_Sans } from "next/font/google";
import { AppProps } from "next/app";

// Next.js docs on page-based routing:
// https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts

const openSans = Open_Sans({
    subsets: ["latin"],
    variable: "--var-open-sans",
    display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main className={`${openSans.className} font-sans`}>
            <Component {...pageProps} />
        </main>
    );
}
