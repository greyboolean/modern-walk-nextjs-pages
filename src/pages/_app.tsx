import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Quicksand } from "next/font/google";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ClerkProvider } from "@clerk/nextjs";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CartProvider, WatchlistProvider } from "@/context";
import { Layout, Main } from "@/ui-core";

const quicksand = Quicksand({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-quicksand",
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Modern Walk</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<style jsx global>{`
				html {
					font-family: ${quicksand.style.fontFamily};
				}
			`}</style>

			<div className={`${quicksand.variable} font-sans`}>
				<QueryClientProvider client={queryClient}>
					<ClerkProvider {...pageProps}>
						<WatchlistProvider>
							<CartProvider>
								<Layout>
									<Main>
										<Component {...pageProps} />
									</Main>
								</Layout>
							</CartProvider>
						</WatchlistProvider>
					</ClerkProvider>
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</div>
		</>
	);
}
