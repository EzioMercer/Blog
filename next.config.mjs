import nextMDX from '@next/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import remarkGfm from 'remark-gfm';
import wikiLinkPlugin from 'remark-wiki-link';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	output: 'export',
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	reactStrictMode: true,
	basePath: "/Blog"
}

const withMDX = nextMDX({
	extension: /\.mdx?$/,
	// Add Markdown plugins here, as desired
	options: {
		remarkPlugins: [
			remarkFrontmatter,
			remarkMdxFrontmatter,
			remarkToc,
			remarkGfm,
			[
				wikiLinkPlugin,
				{
					pageResolver: (name) => [name.replace(/ /g, '-').toLowerCase()],
					hrefTemplate: (permalink) => `/Blog/${permalink}`,
					aliasDivider: '|'
				}
			]
		],
		rehypePlugins: [
			rehypeSlug,
			rehypeAutolinkHeadings,
			[
				rehypePrettyCode,
				{
					theme: 'github-dark-default'
				}
			]
		]
	}
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)