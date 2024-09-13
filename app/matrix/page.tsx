import Matrix, { frontmatter } from './_matrix.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = frontmatter;

export default function Page() {
	return <Matrix />
}