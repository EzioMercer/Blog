import { Metadata } from 'next';
import { MyMetadata } from './types/MyMetadata';

const generateMetadata = (frontmatter: MyMetadata): Metadata => {
	const {
		title,
		description,
	} = frontmatter;

	const productionLinkPrefix = 'https://EzioMercer.github.io';
	const blogPrefix = `${productionLinkPrefix}/Blog`;

	return {
		...frontmatter,
		title: `${title} | EzioMercer`,
		metadataBase: new URL(productionLinkPrefix),
		openGraph: {
			url: blogPrefix,
			title: title as string,
			description: description as string,
			type: 'article',
			authors: ['EzioMercer'],
			publishedTime: frontmatter.publishDate,
			tags: frontmatter.tags.split(', ')
		},
		other: {
			'giscus:backlink': `${blogPrefix}/${title}`
		}
	}
}

export default generateMetadata;