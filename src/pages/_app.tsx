import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Quicksand } from "next/font/google";
import Head from "next/head";
import { Layout, Main } from "@/ui-core";

const quicksand = Quicksand({
	subsets: ["latin"],
	display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Modern Walk</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={`${quicksand.className}`}>
				<Layout>
					<Main>
						<Component {...pageProps} />
					</Main>
				</Layout>
			</div>
		</>
	);
}