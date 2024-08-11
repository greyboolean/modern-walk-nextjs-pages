import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import type { Product } from "@/models/product";
import { getProductById } from "@/services/products";
import { Product as ProductTemplate } from "@/ui-core";

export default function Product() {
	const router = useRouter();
	const { id } = router.query;
	const productId = Array.isArray(id) ? id[0] : id || "";
	const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProduct = async () => {
			const product = await getProductById(productId);
			if (product) {
				setProduct(product);
        setLoading(false);
			}
		};

		fetchProduct();
	}, [id, productId]);

	return (
		<>
			<Head>
				<title>{`${product?.title || "Product"} | Modern Walk`}</title>
			</Head>
			<ProductTemplate product={product as Product} loading={loading} />
		</>
	);
}
