import Head from "next/head";
import { getProductsByCategory } from "@/services/products";
import { Clothing, ClothingProps } from "@/ui-core";

export async function getServerSideProps() {
	const products = await getProductsByCategory("women");

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
				<title>{`Women's Clothing | Modern Walk`}</title>
			</Head>

			<Clothing category="women" products={products} />
		</>
	);
}
