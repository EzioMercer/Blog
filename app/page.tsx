import Test, { frontmatter } from './_test.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
	...frontmatter,
	other: {
		'giscus:backlink': `https://EzioMercer.github.io/Blog/${frontmatter.title}`,
	}
};

const Page = () => <Test />;

export default Page;