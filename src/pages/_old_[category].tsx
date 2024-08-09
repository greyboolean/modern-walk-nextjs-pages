import Head from "next/head";
import { useRouter } from "next/router";
import { Clothing } from "@/ui-core";
import { getCategoryfromSlug, toTitleCase } from "@/utils/utils";

export default function Category() {
	const router = useRouter();
	const { category: slug } = router.query;

	const categorySlug = Array.isArray(slug) ? slug[0] : slug || "";

	const category = getCategoryfromSlug(categorySlug);

	return (
		<>
			<Head>
				<title>{`${toTitleCase(
					category
				)}'s Clothing | Modern Walk`}</title>
			</Head>

			<Clothing category={category} />
		</>
	);
}
