declare module '*.mdx' {
	import { MyMetadata } from './app/_utils/types/MyMetadata';
	export const frontmatter: MyMetadata;
}