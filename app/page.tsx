import Test, { frontmatter } from './_test.mdx';
import { Metadata } from 'next';
import generateMetadata from './_utils/generateMetadata';

export const metadata: Metadata = generateMetadata(frontmatter);

const Page = () => <Test />;

export default Page;