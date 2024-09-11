declare module '*.mdx' {
	import { Metadata } from 'next';
	export const frontmatter: Metadata;
}