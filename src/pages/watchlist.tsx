import Head from "next/head";
import { Watchlist } from "@/ui-core";

export default function watchlist() {
	return (
		<>
      <Head>
        <title>Watchlist | Modern Walk</title>
      </Head>

			<Watchlist />
		</>
	);
}
