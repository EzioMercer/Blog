import Test , { frontmatter } from './_test.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = frontmatter;

const Page = () => <Test />;

export default Page;