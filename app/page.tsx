import Welcome, { frontmatter } from './mdx-page.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = frontmatter;

export default function Page() {
	return <Welcome />
}