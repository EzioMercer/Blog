import Test, { frontmatter } from './_test.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = frontmatter;

export default function Page() {
	return <Test />
}