import { getAllProducts } from "@/services/products";
import { HomeProps, Home as HomeTemplate } from "@/ui-core";

export async function getStaticProps() {
	const products = await getAllProducts();

	return {
		props: {
			products,
		},
		revalidate: 60,
	};
}

export default function Home({ products }: HomeProps) {
	return <HomeTemplate products={products} />;
}
