import { Open_Sans } from "next/font/google";
import { AppProps } from "next/app";

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
