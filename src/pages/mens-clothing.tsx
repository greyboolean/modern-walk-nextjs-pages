import Head from "next/head";
import { getProductsByCategory } from "@/services/products";
import { Clothing, ClothingProps } from "@/ui-core";

export async function getServerSideProps() {
	const products = await getProductsByCategory("men");

	return {
		props: {
			products,
		},
	};
}

export default function MensClothing({ products }: ClothingProps) {
	return (
		<>
			<Head>
				<title>Men&apos;s Clothing | Modern Walk</title>
			</Head>

			<Clothing category="men" products={products} />
		</>
	);
}
