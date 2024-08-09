import Head from "next/head";
import { Clothing } from "@/ui-core";

export default function MensClothing() {
	return (
		<>
			<Head>
				<title>{`Men's Clothing | Modern Walk`}</title>
			</Head>

			<Clothing category="men" />
		</>
	);
}
