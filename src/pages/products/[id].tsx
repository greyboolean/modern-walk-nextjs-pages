import Head from "next/head";
import { getAllProducts, getProductById } from "@/services/products";
import { ProductProps, Product as ProductTemplate } from "@/ui-core";

export async function getStaticPaths() {
	const products = await getAllProducts();
	const paths = products.map((product) => ({
		params: { id: product.id.toString() },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }: { params: { id: string } }) {
	const product = await getProductById(params.id);

	return {
		props: {
			product,
		},
		revaliate: 300,
	};
}

export default function Product({ product }: ProductProps) {
	return (
		<>
			<Head>
				<title>{product.title} | Modern Walk</title>
			</Head>
			<ProductTemplate product={product} />
		</>
	);
}
